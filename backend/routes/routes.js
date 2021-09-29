const express = require('express')
const AddToCart = require('../Controller/AddToCarts')
const { Login } = require('../Controller/Login')
const { RegisterUser } = require('../Controller/RegisterUser')
const auth = require('../Middleware/authMiddleware')
const routes = express.Router()

routes.post('/loginUser',  Login)

routes.post('/registerUsers', RegisterUser)

routes.post('/addTocart',auth, AddToCart)


module.exports = routes