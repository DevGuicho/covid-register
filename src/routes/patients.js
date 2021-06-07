const express = require('express')
const router = express.Router()

const patientsController = require('../controllers/patients')

// ROUTE /patients/list
// Esta ruta renderiza la pagina index
router.get('/', patientsController.patients)

// ROUTE /patients/add-patient
// Esta ruta renderiza la pagina addPatient
router.get('/add-patient', patientsController.addPatient)

// ROUTE /patients/list
// Esta ruta muestra todos los registros en formato JSON
router.get('/list', patientsController.listPatients)

module.exports = router
