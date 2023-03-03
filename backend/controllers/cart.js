const cartSchema = require('../models/cartModel')
exports.Addtocart = (req, res) => {

    const newCart = new cartSchema({
        user: req.user._id,
        cartItem: req.body.cartItem
    });
    newCart.save((err, newCart) => {
        if (err) return res.status(400).json({ msg: 'theres something wrong' });
        if (newCart) { return res.status(201).json({ msg: 'cart', newCart }) }
    })

}