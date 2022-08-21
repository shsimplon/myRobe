import App from "./config/server";
import config from "./config/env";
import db from "./config/database";
import middlewares, { logger } from "./middlewares";
import routes from "./modules";

const application = new App(routes, middlewares);

(async () => {
  try {
    await db.connect();

    application.listen(config.app_port);
  } catch (e: any) {
    console.error(e);
    logger.log(500, e.message);
  }
})();
