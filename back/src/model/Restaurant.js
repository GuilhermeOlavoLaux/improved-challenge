const mongoose = require("mongoose");

const RestaurnatsSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    menuItems: [{
        name: { String, required: true },
        description: { String, required: true },
        price: { String, required: true }
    }]
})

module.exports = mongoose.model('Restaurnats', RestaurnatsSchema)

