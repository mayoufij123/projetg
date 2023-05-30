const pizzaSchema = require('../models/pizzaModel')
exports.ajoutpizza = async(req, res) => {
    try {
        const NewPizza = new pizzaSchema(req.body)
        await NewPizza.save()
        res.status(200).send({ msg: 'you did it the pizza is aded', NewPizza })

    } catch (err) {
        console.log(err)
        res.status(500).send('could not add pizza')
    }

}
exports.getallpizza = async(req, res) => {
    try {
        const pizz = await pizzaSchema.find()
        res.status(200).send({ msg: 'this is the pizzas list', pizz })

    } catch (err) {
        res.status(500).send('you have no pizza to get')

    }

}
exports.modfPizza = async(req, res) => {
    try {
        const { id } = req.params
        const updatepizza = await pizzaSchema.findByIdAndUpdate(id, { $set: {...req.body } })
        res.status(200).send({ msg: 'you can update me', updatepizza })
    } catch (err) {
        console.log(err)
    }

}
exports.deletPizza = async(req, res) => {
    try {
        const { id } = req.params
        const deletpizza = await pizzaSchema.findOneAndDelete(id)
        res.status(200).send({ msg: 'you  delete that pizza' })

    } catch (err) {
        console.log(err)
    }

}
exports.uniquePizza = async(req, res) => {
    try {
        const { id } = req.params
        const uniquepizza = await pizzaSchema.findById(id)
        res.status(200).send({ msg: 'you find that user', uniquepizza })
    } catch (err) { console.log(err) }




}