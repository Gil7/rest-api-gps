const express = require('express')
const api = express.Router()
const userController = require('../controllers/users')

api.get('/users', userController.get_users)

module.exports = api