const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    }, 
    email: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date()
    },
});

module.exports = mongoose.model('User', userSchema);