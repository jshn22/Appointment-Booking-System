const express = require("express");
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
} = require("../controllers/appointmentController");
const protect = require("../middleware/authMiddleware");
const validateAppointment = require("../middleware/validateAppointment");

const router = express.Router();

router.use(protect);

router.post("/", validateAppointment, createAppointment);
router.get("/", getAppointments);
router.get("/:id", getAppointmentById);
router.put("/:id", validateAppointment, updateAppointment);
router.patch("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

module.exports = router;
