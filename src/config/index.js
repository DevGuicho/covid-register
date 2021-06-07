if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  isDev: process.env.NODE_ENV === 'development',
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST
}
