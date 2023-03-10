const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        cartItem: [{
            pizza: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "pizzas",
                required: false,
            },
            quantity: { type: Number, default: 1 },
            price: { type: Number, default: 0 }


        }]

    }, { timestamps: true }

)
module.exports = mongoose.model('cartes', cartSchema)