import app from "./config/server.config.js";

const PORT = process.env.SV_PORT || 3000;

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
