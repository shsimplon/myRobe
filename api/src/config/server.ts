import express, { Response } from "express";
import { Request } from "express";

import { Server } from "@overnightjs/core";
import { handleError } from "../helpers/ApiError";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../swagger.json";
class App extends Server {
  constructor(routes: Array<Object>, middlewares: Object) {
    super();

    this.initializeMiddlewares(middlewares);
    super.addControllers(routes);
    this.initializeErrorHandler();
    this.initializeSwagger();
  }

  initializeMiddlewares(middlewares: any) {
    for (const key in middlewares) {
      if (key === "csrf") {
        this.app.get(
          "/csrf",
          middlewares[key],
          (req: Request | any, res: Response) => {
            res.status(200).json(req.csrfToken());
          }
        );
      } else this.app.use(middlewares[key]);
    }
  }

  initializeErrorHandler() {
    this.app.use(handleError);
  }

  initializeSwagger() {
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
  }

  listen(port: any) {
    this.app.listen(port, async () =>
      console.log(`application started on port : ${port}`)
    );
  }
}

export default App;
