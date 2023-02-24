const mongoose = require('mongoose')
const pizzaSchema = mongoose.Schema({
        name: String,
        varients: [],
        prices: [],
        category: String,
        description: String,
        image: String,

    }

)
module.exports = mongoose.model('pizzas', pizzaSchema)