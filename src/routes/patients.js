const express = require('express')
const router = express.Router()

const patientsController = require('../controllers/patients')

router.get('/', patientsController.patients)
router.get('/add-patient', patientsController.addPatient)

module.exports = router
