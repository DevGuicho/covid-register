const express = require('express')
const router = express.Router()

const patientsController = require('../controllers/patients')

// Esta ruta renderiza la pagina index
router.get('/', patientsController.patients)

// Esta ruta renderiza la pagina addPatient
router.get('/add-patient', patientsController.addPatient)

// Esta ruta muestra todos los registros en formato JSON
router.get('/api/patients', patientsController.find)

// Esta ruta muestra un registro en formato JSON
router.get('/api/patients/:id', patientsController.findOneById)

// Esta ruta crea un nuevo registro de paciente
router.post('/api/patients', patientsController.create)

// Esta ruta actualiza un nuevo registro de paciente
router.put('/api/patients/:id', patientsController.update)

// Esta ruta actualiza un nuevo registro de paciente
router.delete('/api/patients/:id', patientsController.delete)

module.exports = router
