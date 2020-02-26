const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true, minlength: 1 },
  larstName: { type: String, required: false, minlength: 1 },
  email: { type: String, required: false },
  password: { type: String, required: false, minlength: 1 }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
