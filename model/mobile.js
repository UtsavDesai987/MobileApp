const mongoose = require('mongoose')
const validator = require('validator')

const mobileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Price must be a postive number')
            }
        }
    },
    own: {
        type: String,
        required: true,
        trim: true,
    },
})

const Mobile = mongoose.model('Mobile', mobileSchema)

module.exports = Mobile