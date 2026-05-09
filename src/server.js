const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Appointment Booking System API is running"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
