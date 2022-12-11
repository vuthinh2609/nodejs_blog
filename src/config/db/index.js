const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log("Connect successfully!")
    } catch (error) {
        console.log("Connect failed")
        console.log(error)
    }
}

module.exports = {connect}