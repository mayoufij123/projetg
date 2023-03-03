const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: false,
        },
        cartItem: [{
            pizza: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "pizzas",
                required: false,
            },
            quantity: { type: Number, default: 1 }


        }]

    }, { timetamps: true }

)
module.exports = mongoose.model('cartes', cartSchema)