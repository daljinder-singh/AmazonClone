const express = require('express')
const { Login } = require('../Controller/Login')
const routes = express.Router()

routes.post('/login', Login)



module.exports = routes