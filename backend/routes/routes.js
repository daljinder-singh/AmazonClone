const express = require('express')
const AddToCart = require('../Controller/AddToCarts')
const { Login } = require('../Controller/Login')
const { RegisterUser } = require('../Controller/RegisterUser')
const auth = require('../Middleware/authMiddleware')
const captcha = require('../Middleware/CaptchaMiddleware')
const routes = express.Router()


routes.post('/loginUser', captcha,  Login)

routes.post('/registerUsers', RegisterUser)

routes.post('/addTocart', auth, AddToCart)


module.exports = routes