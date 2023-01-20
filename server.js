// require npm packages
require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const formData = require('express-form-data')

// connect to MongoDB with mongoose
require('./config/database.js')

// require routes
const profilesRouter = require('./routes/profiles.js').router
const authRouter = require('./routes/auth.js').router

// create the express app
const app = express()

// basic middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(formData.parse())

// mount routes
app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)

// handle 404 errors
app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

// handle all other errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

module.exports = { app }
