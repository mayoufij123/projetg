var jwt = require('jsonwebtoken')

const userSchema = require('../models/userModel')

exports.isAuth = async(req, res, next) => {
    try {
        const token = req.header('Authorized')
        var decoder = jwt.verify(token, process.env.privateKey)

        if (!decoder) { return res.status(400).send({ msg: 'you are not welcome' }) }

        const user = await userSchema.findById(decoder.id)

        req.user = user
        next()

    } catch (err) {
        res.status(500).send({ msg: 'you are not authorized' })
    }

}