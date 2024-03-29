import { ConnectionOptions, getConnectionManager } from "typeorm";
import { Categorie } from "../modules/categorie/entity";
import { Dress } from "../modules/Dress/entity";
import { Reservation } from "../modules/Reservation/entity";
import { User } from "../modules/User/entity";
import config from "./env";

console.log("database is connected");
const entities = [User, Dress, Categorie, Reservation];

const options: ConnectionOptions = {
  type: "mysql",
  host: config.db_host,
  port: config.db_port,
  username: config.db_user,
  password: config.db_password,
  database: config.db_name,
  logging: true,
  synchronize: true,
  migrationsRun: false,
  entities: [__dirname + "/../modules/**/entity.{js,ts}"],
  migrations: ["src/config/database/migration/*.ts"],
};
console.log(__dirname);
const connectionManager = getConnectionManager();

const db = connectionManager.create(options);
export default db;
