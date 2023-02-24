const express = require('express')
const pizzaRouter = require('./routes/pizzaRoute')

const userRouter = require('./routes/userRoute')
var cors = require('cors');
const conectdb = require('./confige/conectdb');

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())
require('dotenv').config()
app.use('/api/pizza', pizzaRouter)
app.use('/authe/user', userRouter)
conectdb()



app.listen(port, (err) => {
    err ? console.log(err) : console.log(`go to the port number ${port}`);
})