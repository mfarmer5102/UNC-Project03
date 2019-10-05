var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

//Import DB models
var db = require("./models");

//Allow post requests to be handled
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.JAWSDB_URL) {
  // React SPA Route
  app.use(express.static(path.resolve(__dirname, "build")));
  // Routes
  require("./routes/apiRoutes")(app);
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
} else {
  // React SPA Route
  app.use(express.static(path.resolve(__dirname, "public")));
  // Routes
  require("./routes/apiRoutes")(app);
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
}

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
