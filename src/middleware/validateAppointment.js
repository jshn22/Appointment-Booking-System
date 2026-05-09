const validateAppointment = (req, res, next) => {
  const { patientName, doctorName, appointmentDate, timeSlot, reason } = req.body;

  if (!patientName || !doctorName || !appointmentDate || !timeSlot || !reason) {
    return res.status(400).json({
      success: false,
      message: "patientName, doctorName, appointmentDate, timeSlot and reason are required"
    });
  }

  next();
};

module.exports = validateAppointment;
