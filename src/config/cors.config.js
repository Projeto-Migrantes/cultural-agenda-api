import "dotenv/config";

const { CORS_ORIGIN } = process.env;

export const corsOptions = {
  origin: [CORS_ORIGIN],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
