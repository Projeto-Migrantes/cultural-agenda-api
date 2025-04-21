import express from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

import limiter from "../middlewares/rate-limiter.middleware.js";
import {
  errorHandler,
  notFoundHandler,
} from "../middlewares/error-handler.middleware.js";

import { corsOptions } from "./cors.config.js";

const app = express();

app.use(express.json());

app.use(cors(corsOptions));
app.use(helmet());
app.use(limiter);

const swaggerDocument = YAML.load(
  path.join(process.cwd(), "src/docs", "api-docs.yaml"),
);

// app.use("/api/v1");
app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
