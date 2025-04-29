import { conn } from "./config/database.config.js";
import app from "./config/server.config.js";

const initializeDatabase = async () => {
  try {
    await conn.authenticate();
    console.info("Database connection established successfully.");
  } catch (erro) {
    console.error("Error establishing database connection:", erro);
    process.exit(1);
  }
};

const initializeServer = () => {
  const port = process.env.SV_PORT ?? 3000;
  app.listen(port, () => {
    console.info(`Server is running on port ${port}...`);
  });
};

const bootstrap = async () => {
  await initializeDatabase();
  initializeServer();
};

bootstrap();
