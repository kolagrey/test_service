const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true 
    },
    dateOfBirth: {
        type: Date,
        require: true
    },
    location: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User', userSchema, 'andela_users');