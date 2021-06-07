const Patient = require('../models/Patient')

exports.patients = (req, res) => {
  res.render('pages/index')
}
exports.addPatient = (req, res) => {
  res.render('pages/addPatient')
}

exports.find = async (req, res) => {
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
exports.create = async (req, res) => {
  const patient = req.query
  const parsedPatient = parsePatient(patient)
  const newPatient = new Patient(parsedPatient)

  res.json({
    data: await newPatient.save()
  })
}
exports.update = async (req, res) => {
  const patient = req.query
  const { id } = req.params
  const parsedPatient = parsePatient(patient)

  res.json({
    data: await Patient.findByIdAndUpdate(id, parsedPatient, { new: true })
  })
}

exports.delete = async (req, res) => {
  const { id } = req.params
  res.json({
    data: await Patient.findByIdAndDelete(id)
  })
}

const parsePatient = (patient) => {
  const age = parseInt(patient.age)
  const isIntubated = patient.isIntubated === 'true'
  const gurney = parseInt(patient.gurney)
  return { ...patient, age, isIntubated, gurney }
}
