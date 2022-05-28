const mongoose = require('mongoose');

function connectToDataBase() {
    mongoose.connect('mongodb+srv://admin:123@cluster0.trbtvhy.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
    })

    const db = mongoose.connection;
    db.on('error', (error) => console.log(error))
    db.once("open", () => console.log('Connected do DB 💽 ✅'))
};

module.exports = connectToDataBase;