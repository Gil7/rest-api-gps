const express = require('express')
const api = express.Router()
const mensajeController = require('../controllers/mensaje')
const middlewares = require('../middlewares/check-auth')

api.post('/',middlewares.verify_auth, mensajeController.guardar_mensaje)
api.get('/envio/:id', middlewares.verify_auth, mensajeController.get_mensajes_envio)
module.exports = api