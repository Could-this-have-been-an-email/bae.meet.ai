const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: false },
  larstName: { type: String, required: false },
  email: { type: String, required: false },
  password: { type: String, required: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
