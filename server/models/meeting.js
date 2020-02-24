const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  name: {
    type: String,
    minlegnth: [1, 'Too Short'],
    trim: true,
    required: false
  },
  date: { type: Date, required: false },
  owner: { type: String, trim: true, required: false },
  location: { type: String, trim: true, required: false },
  purpose: { type: String, trim: true, required: false },
  owner: { type: String, trim: true, required: false },
  backgroundForMeeting: { any: [], required: false },
  agenda: { any: [], required: false },
  meetingNote: { any: [], required: false },
  atendees: { any: [], required: false }
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
