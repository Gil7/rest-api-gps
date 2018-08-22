const express = require('express')
const api = express.Router()
const envioController = require('../controllers/envio')
const middlewares = require('../middlewares/check-auth')


api.post('/', middlewares.verify_auth, envioController.guardar_envio)


module.exports = api