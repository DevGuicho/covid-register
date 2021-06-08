const express = require('express')
const router = express.Router()

const patientsController = require('../controllers/patients')

// Esta ruta renderiza la pagina index
router.get('/', patientsController.patients)

// Esta ruta renderiza la pagina addPatient
router.get('/add-patient', patientsController.addPatient)

// Esta ruta muestra todos los registros en formato JSON
router.get('/patients-list', patientsController.find)

// Esta ruta muestra un registro en formato JSON
router.get('/patient/:id', patientsController.findOneById)

// Esta ruta crea un nuevo registro de paciente
router.post('/api/patients', patientsController.create)

// Esta ruta actualiza un nuevo registro de paciente
router.post('/api/update-patient/:id', patientsController.update)

// Esta ruta elimina registro de paciente
router.get('/api/delete-patient/:id', patientsController.delete)

router.get('/update-patient/:id', patientsController.edit)

module.exports = router
