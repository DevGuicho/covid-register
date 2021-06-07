const Patient = require('../models/Patient')

exports.patients = (req, res) => {
  res.render('pages/index')
}
exports.addPatient = (req, res) => {
  res.render('pages/addPatient')
}

exports.listPatients = async (req, res) => {
  res.json({
    data: await Patient.find({})
  })
}
exports.findOneById = async (req, res) => {
  const { id } = req.params
  res.json({
    data: await Patient.findById(id)
  })
}
