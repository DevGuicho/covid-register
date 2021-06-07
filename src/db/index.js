const debug = require('debug')('app:database')
const mongoose = require('mongoose')
const { dbUser, dbPassword, dbHost, dbName } = require('../config')

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => debug('Database connected'))
  .catch((error) => debug(error))
