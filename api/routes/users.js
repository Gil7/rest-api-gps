const express = require('express')
const api = express.Router()
const userController = require('../controllers/users')

api.get('/', userController.get_users)
api.post('/register', userController.save_user)

module.exports = api