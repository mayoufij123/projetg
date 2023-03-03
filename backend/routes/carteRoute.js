const express = require('express')
const cartSchema = require('../models/cartModel')
const cartRouter = express.Router()
const { signin } = require('../controllers/user')
const { isAuth } = require('../midellwere/isAuth')
const { Addtocart } = require('../controllers/cart')
cartRouter.post('/createcart', isAuth, Addtocart)




module.exports = cartRouter