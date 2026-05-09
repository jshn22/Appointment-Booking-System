const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, "Patient name is required"],
      trim: true,
      minlength: [3, "Patient name must be at least 3 characters"]
    },
    doctorName: {
      type: String,
      required: [true, "Doctor name is required"],
      trim: true,
      minlength: [3, "Doctor name must be at least 3 characters"]
    },
    appointmentDate: {
      type: Date,
      required: [true, "Appointment date is required"]
    },
    timeSlot: {
      type: String,
      required: [true, "Time slot is required"],
      trim: true
    },
    status: {
      type: String,
      enum: ["booked", "completed", "cancelled"],
      default: "booked"
    },
    reason: {
      type: String,
      required: [true, "Reason is required"],
      trim: true,
      minlength: [5, "Reason must be at least 5 characters"]
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
