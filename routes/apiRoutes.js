var db = require("../models");
var uuid = require("uuid/v4");
console.log(db);

module.exports = function(app) {
  // OVERVIEW ////////////////////////////////////////////////

  app.get("/overview", function(req, res) {
    res.send("route hit");
  });

  // LIQUID ASSETS ////////////////////////////////////////////////

  app.get("/api/liquidassets", function(req, res) {
    res.send("route hit");
  });

  app.post("/api/liquidassets", function(req, res) {
    res.send("route hit");
  });

  app.delete("/api/liquidassets", function(req, res) {
    res.send("route hit");
  });

  // FROZEN ASSETS ////////////////////////////////////////////////

  app.get("/api/frozenassets", function(req, res) {
    res.send("route hit");
  });

  app.post("/api/frozenassets", function(req, res) {
    res.send("route hit");
  });

  app.delete("/api/frozenassets", function(req, res) {
    res.send("route hit");
  });

  // LIABILITIES ////////////////////////////////////////////////

  app.get("/api/liabilities", function(req, res) {
    res.send("route hit");
  });

  app.post("/api/liabilities", function(req, res) {
    res.send("route hit");
  });

  app.delete("/api/liabilities", function(req, res) {
    res.send("route hit");
  });

  // SOURCE DETAIL ////////////////////////////////////////////////

  app.get("/api/sourcedetail", function(req, res) {
    res.send("route hit");
  });

  app.post("/api/sourcedetail", function(req, res) {
    res.send("route hit");
  });

  app.delete("/api/sourcedetail", function(req, res) {
    res.send("route hit");
  });
};
