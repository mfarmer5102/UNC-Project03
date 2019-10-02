var db = require("../models");
var uuid = require("uuid/v4");
console.log(db);

module.exports = function(app) {
  // OVERVIEW ////////////////////////////////////////////////

  app.get("/api/alluserentries/:user_uuid", function(req, res) {
    db.Entry.findAll({
      where: {
        user_uuid: req.params.user_uuid
      },
      order: [["entry_date", "DESC"]]
    }).then(function(result) {
      res.json(result);
    });
  });

  // LIQUID ASSETS ////////////////////////////////////////////////

  app.get("/api/liquidassets/:user_uuid", function(req, res) {
    db.Source.findAll({
      where: {
        user_uuid: req.params.user_uuid,
        type: "Liquid Asset"
      },
      order: [["source_name", "ASC"]]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/liquidassets", function(req, res) {
    db.Source.create(req.body).then(function(result) {
      console.log(result);
      res.sendStatus(200);
    });
  });

  app.delete("/api/liquidassets/:source_uuid", function(req, res) {
    db.Source.destroy({
      where: {
        uuid: req.params.source_uuid
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // FROZEN ASSETS ////////////////////////////////////////////////

  app.get("/api/frozenassets/:user_uuid", function(req, res) {
    db.Source.findAll({
      where: {
        user_uuid: req.params.user_uuid,
        type: "Frozen Asset"
      },
      order: [["source_name", "ASC"]]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/frozenassets", function(req, res) {
    db.Source.create(req.body).then(function(result) {
      console.log(result);
      res.sendStatus(200);
    });
  });

  app.delete("/api/frozenassets/:source_uuid", function(req, res) {
    db.Source.destroy({
      where: {
        uuid: req.params.source_uuid
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // LIABILITIES ////////////////////////////////////////////////

  app.get("/api/liabilities/:user_uuid", function(req, res) {
    db.Source.findAll({
      where: {
        user_uuid: req.params.user_uuid,
        type: "Liability"
      },
      order: [["source_name", "ASC"]]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/liabilities", function(req, res) {
    db.Source.create(req.body).then(function(result) {
      console.log(result);
      res.sendStatus(200);
    });
  });

  app.delete("/api/liabilities/:source_uuid", function(req, res) {
    db.Source.destroy({
      where: {
        uuid: req.params.source_uuid
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // SOURCE DETAIL ////////////////////////////////////////////////

  app.get("/api/sourcedetail/:user_uuid/:source_uuid", function(req, res) {
    db.Entry.findAll({
      where: {
        user_uuid: req.params.user_uuid,
        source_uuid: req.params.source_uuid
      },
      order: [["entry_date", "DESC"]]
    }).then(function(result) {
      console.log(result);
      res.json(result);
    });
  });

  app.post("/api/sourcedetail", function(req, res) {
    db.Entry.create(req.body).then(function(result) {
      console.log(result);
      res.sendStatus(200);
    });
  });

  app.delete("/api/sourcedetail/:id", function(req, res) {
    db.Entry.destroy({
      where: {
        uuid: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
