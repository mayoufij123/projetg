const express = require('express')
const userRouter = express.Router()
const { register, signin } = require('../controllers/user')
const { validation, registerValidator, loginValidator } = require('../midellwere/registervalidater')
const { getallContact, ajoutContact, modfContact, deletContact, uniqueContact } = require('../controllers/user');
const { isAuth } = require('../midellwere/isAuth')
userRouter.post('/signup', registerValidator, validation, register)

userRouter.post('/signin', loginValidator, signin)


userRouter.get('/getaUser', isAuth, (req, res) => {
    res.send(req.user)
})

userRouter.get('/getuser', getallContact)
userRouter.post('/add', ajoutContact)
userRouter.put('/updateuser/:id', modfContact)
userRouter.delete('/deleteuser/:id', deletContact)
userRouter.get('/getuser/:id', uniqueContact)




module.exports = userRouter