const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path')

const cors = require("cors");
var session = require("express-session");
const passport = require("./config/passport");
const bodyParser = require("body-parser");




app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "../client/build")));


app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

const routes = require("./routes");
const users = require("./routes/api/user");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add routes
app.use(routes);
app.use(users);

// connect to db (meetingsdb)

mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://user:password1@ds157723.mlab.com:57723/heroku_bn48wp3b"
);

// Start the API server

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'client/build', 'index.html')); //rel path
  })
}

app.listen(process.env.PORT || PORT, function () {
  console.log("Express server is up and running!");
});
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
