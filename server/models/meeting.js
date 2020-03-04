const mongoose = require("mongoose");
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
  newagenda: { type: String, required: false },
  vote: { type: Number, default: 0, required: false },
  tasks: [taskSchema]
});

const meetingNoteSchema = new Schema({
  userName: { type: String },
  note: { type: String }
});

// const atendeesSchema = new Schema({
//   {
//   firstName: { type: String },
//   lastName: { type: String },
//   jobTitle: { type: String }
//   // userId: {type: String}
//   }
// });

const meetingSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: false
  },
  date: { type: Date, required: false },
  time: { type: String },
  owner: { type: String, trim: true, required: false },
  location: { type: String, trim: true, required: false },
  duration: { type: Number },
  purpose: { type: String, trim: true, required: false },
  owner: { type: String, trim: true, required: false },
  backgroundForMeeting: [backgroundSchema],
  agenda: [agendaSchema],
  meetingNote: [meetingNoteSchema],
  users: []
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
