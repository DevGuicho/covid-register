const express = require('express')
const router = express.Router()

const patientsController = require('../controllers/patients')

// Esta ruta renderiza la pagina index
router.get('/', patientsController.patients)

// Esta ruta renderiza la pagina addPatient
router.get('/add-patient', patientsController.addPatient)

// Esta ruta muestra todos los registros en formato JSON
router.get('/api/patients', patientsController.listPatients)

// Esta ruta muestra un registro en formato JSON
router.get('/api/patients/:id', patientsController.findOneById)

// Esta ruta muestra un registro en formato JSON
router.post('/api/patients/', patientsController.findOneById)

module.exports = router
