const userSchema = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");


exports.register = async(req, res) => {
    try {

        const { name, email, password, role } = req.body
        const found = await userSchema.findOne({ email })
        if (found) { res.status(400).send({ msg: 'vous avez deja un compte avec cet email' }) }
        const newUser = await new userSchema(req.body)
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        newUser.password = hash
        const payload = { id: newUser._id }
        var token = jwt.sign(payload, process.env.privateKey)
        newUser.save()

        res.status(200).send({ msg: 'welcome to our website', newUser, token })

    } catch (err) {

        console.log(err)
        res.status(500).send({ msg: 'theres something wrong' })

    }
}
exports.signin = async(req, res) => {
    try {
        const { email, password } = req.body

        const found = await userSchema.findOne({ email })
        if (!found) { res.status(400).send({ msg: 'please go to sign up' }) }

        //partie mdp
        const match = await bcrypt.compare(password, found.password)
        if (!match) { res.status(400).send({ msg: 'password is wrong' }) }
        const payload = { id: found._id }

        var token = jwt.sign(payload, process.env.privateKey)
        res.status(200).send({ msg: 'welcome', token, found })





    } catch (err) {
        res.status(500).send({ msg: 'theres something wrong' })

    }
}
exports.getallContact = async(req, res) => {
    try {
        const cont = await userSchema.find()
        res.status(200).send({ msg: 'this is the users list', cont })

    } catch (err) {
        res.status(500).send('you have no user to get')

    }

}
exports.ajoutContact = async(req, res) => {
    try {
        const NewContact = new userSchema(req.body)
        await NewContact.save()
        res.status(200).send({ msg: 'you did it the conctact is aded', NewContact })

    } catch (err) {
        console.log(err)
        res.status(500).send('could not add auser')
    }

}
exports.modfContact = async(req, res) => {
    try {
        const { id } = req.params
        const updateuser = await userSchema.findByIdAndUpdate(id, { $set: {...req.body } })
        res.status(200).send({ msg: 'you can update me', updateuser })
    } catch (err) {
        console.log(err)
    }

}
exports.deletContact = async(req, res) => {
    try {
        const { id } = req.params
        const deletconst = await userSchema.findOneAndDelete(id)
        res.status(200).send({ msg: 'you  delete that user' })

    } catch (err) {
        console.log(err)
    }

}
exports.uniqueContact = async(req, res) => {
    try {
        const { id } = req.params
        const uniqueuser = await ContactSchema.findById(id)
        res.status(200).send({ msg: 'you find that user', uniqueuser })
    } catch (err) { console.log(err) }




}