const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String
})

const ModelClass = mongoose.model('users', userSchema);

module.exports = ModelClass;