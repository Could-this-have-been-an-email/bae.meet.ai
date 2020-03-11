const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true, minlength: 1 },
  lastName: { type: String, required: false, minlength: 1 },
  email: { type: String, required: false },
  position: { type: String },
  password: { type: String, required: false, minlength: 1 },
  profileURL: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
