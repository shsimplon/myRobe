// middlewares dépendencies
import express from "express";
import cookieParser from "cookie-parser";
import winston from "winston";
import Logger from "../helpers/logger";
import morgan from "morgan";
import csurf from "csurf";

import AuthMiddleware from "./auth";
import cors from "cors";
import { jwtService } from "../libs";

// initialize middlewares with dependencies injection
const auth = new AuthMiddleware(jwtService);
const logger = new Logger(winston);
const csrf = csurf({ cookie: true });
const corpsOptions = { origin: "http://localhost:3000", credentials: true };
//const corpsOptions = { origin: "http://51.75.121.173:3000", credentials: true };

// export all custom middlewares
export { logger, csrf };
export { auth };

//export default api middlewares
export default {
  urlencoded: express.urlencoded({ extended: false }),
  json: express.json(),
  cookieParser: cookieParser(),
  apiLogger: morgan("combined", { stream: logger.stream }),
  cors: cors(corpsOptions),
  csrf,
};
