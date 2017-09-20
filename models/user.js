let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: String,
    message: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);