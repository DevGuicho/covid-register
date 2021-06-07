const { model, Schema } = require('mongoose')

const patientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  curp: {
    type: String,
    required: true,
    unique: true
  },
  isIntubated: {
    type: Boolean,
    required: true
  },
  admissionDate: {
    type: Date,
    required: true
  },
  gurney: {
    type: Number,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  symptomDate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
})

const Patient = model('Patient', patientSchema)

patientSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.patientId = returnedObject._id
    delete returnedObject.__v
    delete returnedObject._id
  }
})

module.exports = Patient
