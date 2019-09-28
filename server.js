var express = require("express");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 5000;
var path = require("path");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Routes
require("./routes/apiRoutes")(app);

// React SPA Route
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

var syncOptions = { force: false, alter: true };

// Starting the server, syncing our models ------------------------------------/
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
