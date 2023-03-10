const cartSchema = require('../models/cartModel')
exports.Addtocart = (req, res) => {
    cartSchema.findOne({ user: req.user._id })
        .exec((err, newCart) => {

            if (err) { return res.status(400).json({ msg: 'wrong' }); }
            if (newCart) {
                const product = req.body.cartItem.pizza

                const Item = newCart.cartItem.find(c => c.pizza == product)
                if (Item) {
                    cartSchema.findOneAndUpdate({ "user": req.user._id, "cartItem.pizza": product }, {
                            "$set": { "cartItem.$": {...req.body.cartItem, quantity: Item.quantity + req.body.cartItem.quantity } }
                        })
                        .exec((err, _newCart) => {
                            if (err) return res.status(400).json({ msg: 'ereur hhhhhh' });
                            if (_newCart) return res.status(201).json({ newCart: _newCart });
                        })

                } else {
                    cartSchema.findOneAndUpdate({ user: req.user._id }, {
                            "$push": { "cartItem": req.body.cartItem }
                        })
                        .exec((err, _newCart) => {
                            if (err) return res.status(400).json({ msg: 'ereur hhhhhh' });
                            if (_newCart) return res.status(201).json({ newCart: _newCart });
                        })

                }




            } else {
                const newCart = new cartSchema({
                    user: req.user._id,
                    cartItem: [req.body.cartItem]
                });
                newCart.save((err, newCart) => {

                    if (err) return res.status(400).json({ msg: 'it ts wrong' });
                    if (newCart) return res.status(201).json({ msg: 'cart', newCart })
                })

            }
        });
}