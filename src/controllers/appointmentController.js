const mongoose = require("mongoose");
const Appointment = require("../models/Appointment");

const createAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.create({
      ...req.body,
      user: req.user.userId
    });

    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      appointment
    });
  } catch (error) {
    next(error);
  }
};

const getAppointments = async (req, res, next) => {
  try {
    const { status, sortBy = "createdAt", order = "desc" } = req.query;
    const filter = { user: req.user.userId };

    if (status) {
      filter.status = status;
    }

    const sortOrder = order === "asc" ? 1 : -1;
    const appointments = await Appointment.find(filter).sort({ [sortBy]: sortOrder });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments
    });
  } catch (error) {
    next(error);
  }
};

const getAppointmentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid appointment id"
      });
    }

    const appointment = await Appointment.findOne({
      _id: id,
      user: req.user.userId
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found"
      });
    }

    res.status(200).json({
      success: true,
      appointment
    });
  } catch (error) {
    next(error);
  }
};

const updateAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid appointment id"
      });
    }

    const appointment = await Appointment.findOneAndUpdate(
      {
        _id: id,
        user: req.user.userId
      },
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      appointment
    });
  } catch (error) {
    next(error);
  }
};

const deleteAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid appointment id"
      });
    }

    const appointment = await Appointment.findOneAndDelete({
      _id: id,
      user: req.user.userId
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
};
