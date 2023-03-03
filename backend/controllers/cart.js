const cartSchema = require('../models/cartModel')
exports.Addtocart = (req, res) => {

    cartSchema.findOne({ user: req.user._id })
        .exec((err, newCart) => {

            if (err) { return res.status(400).json({ msg: 'wrong' }); }
            if (newCart) {
                const product = req.body.cartItem[0].pizza
                console.log(product)
                const Item = cartSchema.find({ 'cartItem.pizza': product })
                if (Item) {
                    console.log("qqqqqqqqqqqqqqqq", req.body.cartItem[0].quantity)
                    cartSchema.findOneAndUpdate({ "user": req.user._id, "cartItem.pizza": product }, {
                            // "$set": { "cartItem": {...req.body.cartItem, quantity: Item.quantity + req.body.cartItem[0].quantity } }
                            "$set": { "cartItem": { quantity: Item.quantity + req.body.cartItem[0].quantity } }
                        })
                        .exec((err, _newCart) => {
                            if (err) return res.status(400).json({ msg: 'ereur hhhhhh' });
                            if (_newCart) return res.status(201).json({ newCart: _newCart });
                        })

                } else {
                    cartSchema.findOneAndUpdate({ user: req.user._id }, {
                            "$push": { cartItem: req.body.cartItem }
                        })
                        .exec((err, _newCart) => {
                            if (err) return res.status(400).json({ msg: 'ereur ppppp' });
                            if (_newCart) return res.status(201).json({ newCart: _newCart });
                        })


                }

            } else {
                // const newCart = new cartSchema({
                //     user: req.user._id,
                //     cartItem: [req.body.cartItem]
                // });
                const newCart = cartSchema.create({
                    user: req.user._id,
                    cartItem: [product]
                })
                console.log('ttttttttttt', newCart)
                if (newCart) {
                    res.status(201).json({ msg: "created" })
                } else {
                    res.status(400).json({ msg: "noooo" })
                }
                // newCart.save((err, newCart) => {
                // newCart.save((newCart) => {
                //     if (err) return res.status(400).json({ msg: 'it ts wrong' });
                //     if (newCart) return res.status(201).json({ msg: 'cart', newCart })
                // })
            }
        })
}