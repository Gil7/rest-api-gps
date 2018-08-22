const express = require('express')
const api = express.Router()
const ubicacionController = require('../controllers/ubicacion')
const middlewares = require('../middlewares/check-auth')

api.post('/agregar_ubicacion', ubicacionController.guardar_ubicacion)
api.get('rastreo_envio/:id', middlewares.verify_auth, ubicacionController.get_ubicaciones_pedido)
module.exports = api