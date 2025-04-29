const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ message: "Internal Server Error: ", error: err });
};

const notFoundHandler = (req, res) => {
  res.status(404).json({ error: "Check URL, route not found" });
};

export { errorHandler, notFoundHandler };
