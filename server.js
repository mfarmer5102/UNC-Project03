var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

//Import DB models
var db = require("./models");

//Allow post requests to be handled
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Serve up the React application
app.use(express.static(path.resolve(__dirname, "build")));

//Login page
app.get("/", function(req, res) {
  res.redirect('/login')
});

app.get("/login", function(req, res) {
  console.log("hit / route");
  res.sendFile(path.resolve(__dirname, "public", "login.html"));
});

// Routes
require("./routes/apiRoutes")(app);

// React SPA Route
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

var syncOptions = { force: false, alter: true };

// Starting the server, syncing our models ------------------------------------/
var PORT = process.env.PORT || 5000;
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
