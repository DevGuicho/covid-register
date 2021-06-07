const debug = require('debug')('app:server')
const path = require('path')
const express = require('express')

const { port } = require('./config')
const patientsRouter = require('./routes/patients')

const app = express()
require('./db')

// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// SET VIEW ENGINE
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// ROUTES
app.use('/patients', patientsRouter)

app.listen(port, () => debug(`Server running on port ${port}`))
