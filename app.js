const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const users_router = require('./api/routes/users')
//body parser config
app.use(bodyParser.urlencoded({urlencoded : false}))
app.use(bodyParser.json())
//headers configuration
app.use('/api', users_router)

module.exports = app