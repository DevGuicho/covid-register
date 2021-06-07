const express = require('express')
const router = express.Router()

const patientsController = require('../controllers/patients')

router.get('/', patientsController.patients)
router.get('/add-patient', patientsController.addPatient)

router.get('/list', patientsController.listPatients)

module.exports = router
