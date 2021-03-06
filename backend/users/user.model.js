const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true , required: true },
    phoneNo: { type: Number, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);

