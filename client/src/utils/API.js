import axios from "axios";
// const mongoose = require("mongoose");

const server = axios.create({ baseURL: "http://localhost:3001/" });

export default {
  /* User Routes */
  // Gets all users
  getAllUsers: function () {
    return server.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return server.get(`/api/user/${id}`);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return server.delete(`/api/user/${id}`);
  },
  // Saves a user to the database
  createUser: function (userData) {
    return server.post("/api/user", userData);
  },

  /* Meetings Routes */
  // Gets all meetings
  getAllMeetings: function () {
    return server.get("/api/meeting");
  },
  // Gets the meetings with the given id
  getMeeting: function (id) {
    // const objectId = new ObjectId(id);
    // console.log(objectId);
    return server.get(`/api/meeting/${id}`);
  },
  // Deletes the meetings with the given id
  deleteMeeting: function (id) {
    return server.delete(`/api/meeting/${id}`);
  },
  // Saves a meetings to the database
  createMeeting: function (meetingData) {
    return server.post("/api/meeting", meetingData);
  },

  updateMeeting: function (id, meetingData) {
    return server.put(`/api/meeting/${id}`, meetingData);
  },

  checkUser: function (user) {
    return server.post("/api/user/login", user);
  }
};
