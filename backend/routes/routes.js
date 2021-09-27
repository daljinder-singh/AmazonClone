const express = require('express')
const { Login } = require('../Controller/Login')
const { RegisterUser } = require('../Controller/RegisterUser')
const routes = express.Router()

routes.post('/loginUser', Login)

routes.post('/registerUsers', RegisterUser)


module.exports = routes