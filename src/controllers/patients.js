const Patient = require('../models/Patient')

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
  res.redirect('/patients-list')
}
exports.update = async (req, res) => {
  const patient = req.body
  const { id } = req.params
  const parsedPatient = parsePatient(patient)
  console.log(id)
  await Patient.findByIdAndUpdate(id, parsedPatient, { new: true })
  res.redirect(`/patient/${id}`)
}

exports.delete = async (req, res) => {
  const { id } = req.params

  await Patient.findByIdAndDelete(id)

  res.redirect('/api/patients')
}

exports.edit = async (req, res) => {
  const { id } = req.params
  const { _doc: patient } = await Patient.findById(id)
  const data = {
    ...patient,
    admissionDate: patient.admissionDate.toISOString().substr(0, 10),
    symptomDate: patient.symptomDate.toISOString().substr(0, 10)
  }

  res.render('pages/updatePatient', { data: data })
}

const parsePatient = (patient) => {
  const age = parseInt(patient.age)
  const isIntubated = patient.isIntubated === 'true'
  const gurney = parseInt(patient.gurney)
  return { ...patient, age, isIntubated, gurney }
}
