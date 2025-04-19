import express from "express";
import cors from "cors";
import helmet from "helmet";

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

// app.use("/api/v1");

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
