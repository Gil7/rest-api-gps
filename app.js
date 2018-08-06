const express = require('express')
const bodyParser = require('body-parser')

const app = express()
//body parser config
app.use(bodyParser.urlencoded({urlencoded : false}))
app.use(bodyParser.json())
//headers configuration


module.exports = app