var db = require("../models");
var uuid = require("uuid/v4");

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
    console.log(req.body);
    req.body.uuid = uuid(); //Assign a UUID
    db.Source.create(req.body).then(function(result) {
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
    req.body.uuid = uuid(); //Assign a UUID
    db.Source.create(req.body).then(function(result) {
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
    req.body.uuid = uuid(); //Assign a UUID
    db.Source.create(req.body).then(function(result) {
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

  app.get("/api/sourcedetail/:source_uuid", function(req, res) {
    db.Entry.findAll({
      where: {
        source_uuid: req.params.source_uuid
      },
      order: [["entry_date", "DESC"]]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/sourcedetail", function(req, res) {
    db.Entry.create(req.body).then(function(result) {
      res.sendStatus(200);
    });
  });

  app.delete("/api/sourcedetail/:id", function(req, res) {
    db.Source.destroy({
      where: {
        uuid: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  app.delete("/api/entries/:id", function(req, res) {
    console.log("What is this?:" + req.params.id);
    db.Entry.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      console.log(result);
      res.json(result);
    });
  });

  // DETERMINE AND RETURN LATEST VALUES FOR SUM OF LIQUID AND FROZEN ASSETS, SEPARATELY ////////////////////////////////////////////////

  app.get("/api/assetbreakdown", function(req, res) {
    var sql = `
    SELECT Sources.source_name, Entries.amount, Entries.entry_date, Sources.type
    FROM Sources
    JOIN Entries 
    ON Sources.uuid=Entries.source_uuid
    ORDER BY Entries.entry_date DESC;
    `;
    db.sequelize.query(sql).then(function(result) {
      //Find the latest values for each source
      let x = result[0];
      let customResponse = [];
      let uniqueSources = [];
      for (var i = 0; i < x.length; i++) {
        if (uniqueSources.indexOf(x[i].source_name) === -1) {
          let y = {};
          (y.source_name = x[i].source_name),
            (y.amount = x[i].amount),
            (y.entry_date = x[i].entry_date),
            (y.type = x[i].type);
          customResponse.push(y);
        }
        uniqueSources.push(x[i].source_name);
      }
      //Tally for frozen and liquid
      let currentLiquidValue = 0;
      let currentFrozenValue = 0;

      for (var i = 0; i < customResponse.length; i++) {
        if (customResponse[i].type === "Liquid Asset") {
          currentLiquidValue += customResponse[i].amount;
        } else if (customResponse[i].type === "Frozen Asset") {
          currentFrozenValue += customResponse[i].amount;
        }
      }
      console.log(currentLiquidValue);
      console.log(currentFrozenValue);
      //Make a final response
      let finalResponse = {}
      finalResponse.currentLiquidValue = currentLiquidValue
      finalResponse.currentFrozenValue = currentFrozenValue
      //Send response to the front end
      res.json(finalResponse);
    });
  });
};
