import { Sequelize } from "sequelize";
import "dotenv/config";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT, DB_PORT } =
  process.env;

export const conn = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});
