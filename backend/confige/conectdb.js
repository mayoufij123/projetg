const mongoose = require('mongoose')
const conectdb = async() => {
    try {
        await mongoose.connect("mongodb+srv://jaberm:HEonSdwPM5ElaNoA@cluster0.t6ydlsu.mongodb.net/?retryWrites=true&w=majority")
        console.log('you are connectd to the db')
    } catch (err) {
        console.log(err)
    }
}
module.exports = conectdb;