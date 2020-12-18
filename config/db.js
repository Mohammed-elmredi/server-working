const mongoose = require('mongoose')

const connectDB = async () => {
    const connection = await mongoose.connect("mongodb://localhost/ecomerce111", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`connected to the databse`)
}

module.exports = connectDB
