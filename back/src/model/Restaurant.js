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
    menuItems: [
        {
            _id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            }
        }
    ]

})

module.exports = mongoose.model('Restaurnats', RestaurnatsSchema)

