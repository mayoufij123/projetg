const express = require('express')
const pizzaSchema = require('../models/pizzaModel')
const pizzaRouter = express.Router()
pizzaRouter.get('/getpizza', async(req, res) => {
    try {
        const pizz = await pizzaSchema.find()
        res.status(200).send({ msg: 'this is the pizzas list', pizz })

    } catch (err) {
        res.status(500).send('you have no pizza to get')

    }

})
pizzaRouter.post('/addpizza', async(req, res) => {
    try {
        const NewPizza = new pizzaSchema(req.body)
        await NewPizza.save()
        res.status(200).send({ msg: 'you did it the pizza is aded', NewPizza })

    } catch (err) {
        console.log(err)
        res.status(500).send('could not add pizza')
    }

})
module.exports = pizzaRouter