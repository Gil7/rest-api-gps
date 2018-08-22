const express = require('express')
const api = express.Router()
const camionController = require('../controllers/camion')
const middlewares = require('../middlewares/check-auth')


api.get('/', middlewares.verify_auth,camionController.get_camiones)
api.post('/', camionController.guardar_camion)

module.exports = api