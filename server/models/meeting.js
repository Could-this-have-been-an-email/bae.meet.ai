const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const backgroundSchema = new Schema({
  background: { type: String, required: false },
  note: { type: String, required: false }
});

const taskSchema = new Schema({
  userId: { type: String },
  meetingId: { type: String },
  agendaId: { type: String },
  task: { type: String },
  completed: { type: Boolean, default: false }
});

const agendaSchema = new Schema({
  note: { type: String, required: false },
  vote: { type: Number, default: 0, required: false },
  tasks: [taskSchema]
});

const meetingNoteSchema = new Schema({
  userName: { type: String },
  note: { type: String }
});

const atendeesSchema = new Schema({
  user: { type: String }
});

const meetingSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: false
  },
  date: { type: Date, required: false },
  owner: { type: String, trim: true, required: false },
  location: { type: String, trim: true, required: false },
  purpose: { type: String, trim: true, required: false },
  owner: { type: String, trim: true, required: false },
  backgroundForMeeting: [backgroundSchema],
  agenda: [agendaSchema],
  meetingNote: [meetingNoteSchema],
  atendees: [atendeesSchema]
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
