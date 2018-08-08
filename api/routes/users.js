const express = require('express')
const api = express.Router()
const userController = require('../controllers/users')
const middlewares = require('../middlewares/check-auth')

api.get('/', middlewares.verify_auth, userController.get_users)
api.post('/register', userController.save_user)
api.post('/login', userController.login_user)

module.exports = api