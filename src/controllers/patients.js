const Patient = require('../models/Patient')
const date = require('date-and-time')

exports.patients = (req, res) => {
  res.render('pages/index')
}
exports.addPatient = (req, res) => {
  res.render('pages/addPatient')
}

exports.find = async (req, res) => {
  res.render('pages/patients', { data: await Patient.find({}) })
}
exports.findOneById = async (req, res) => {
  const { id } = req.params
  res.render('pages/onePatient', { data: await Patient.findById(id) })
}
exports.create = async (req, res) => {
  const patient = req.body
  const parsedPatient = parsePatient(patient)
  const newPatient = new Patient(parsedPatient)
  await newPatient.save()
  res.redirect('/api/patients')
}
exports.update = async (req, res) => {
  const patient = req.body
  const { id } = req.params
  const parsedPatient = parsePatient(patient)
  res.render('pages/onePatient', {
    data: await Patient.findByIdAndUpdate(id, parsedPatient, { new: true })
  })
}

exports.delete = async (req, res) => {
  const { id } = req.params

  await Patient.findByIdAndDelete(id)

  res.redirect('/')
}

exports.edit = async (req, res) => {
  const { id } = req.params

  res.render('pages/updatePatient', { data: await Patient.findById(id) })
}

const parsePatient = (patient) => {
  const age = parseInt(patient.age)
  const isIntubated = patient.isIntubated === 'true'
  const gurney = parseInt(patient.gurney)
  return { ...patient, age, isIntubated, gurney }
}
