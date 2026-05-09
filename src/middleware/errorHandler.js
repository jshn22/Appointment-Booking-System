const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map((item) => item.message);
    return res.status(400).json({
      success: false,
      message: messages[0]
    });
  }

  if (error.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Email already exists"
    });
  }

  res.status(500).json({
    success: false,
    message: error.message || "Internal server error"
  });
};

module.exports = errorHandler;
