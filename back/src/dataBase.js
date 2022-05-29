const mongoose = require('mongoose');

function connectToDataBase() {
    mongoose.connect('mongodb://admin:123@ac-clm3pw6-shard-00-00.trbtvhy.mongodb.net:27017,ac-clm3pw6-shard-00-01.trbtvhy.mongodb.net:27017,ac-clm3pw6-shard-00-02.trbtvhy.mongodb.net:27017/?ssl=true&replicaSet=atlas-7akzy1-shard-0&authSource=admin&retryWrites=true&w=majority&ssl=true', {
        useNewUrlParser: true,
    })

    const db = mongoose.connection;
    db.on('error', (error) => console.log(error))
    db.once("open", () => console.log('Connected do DB 💽 ✅'))
};

module.exports = connectToDataBase;