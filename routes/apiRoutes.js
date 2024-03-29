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

  app.get("/api/assetbreakdown/:userid", function(req, res) {
    var sql = `
    SELECT Sources.source_name, Entries.amount, Entries.entry_date, Sources.type
    FROM Sources
    JOIN Entries 
    ON Sources.uuid=Entries.source_uuid
    WHERE Entries.user_uuid='${req.params.userid}'
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
      let finalResponse = {};
      finalResponse.currentLiquidValue = currentLiquidValue;
      finalResponse.currentFrozenValue = currentFrozenValue;
      //Send response to the front end
      res.json(finalResponse);
    });
  });

  app.get("/api/timeline/:userid", function(req, res) {
    //============================================================================================================================================
    //============================================================================================================================================

    function makeMonthString(argObj) {
      let monthString =
        argObj.entry_date[0] +
        argObj.entry_date[1] +
        argObj.entry_date[2] +
        argObj.entry_date[3] +
        argObj.entry_date[4] +
        argObj.entry_date[5] +
        argObj.entry_date[6];
      return monthString;
    }

    function makeMonthString2(argObj) {
      let monthString =
        argObj[0] +
        argObj[1] +
        argObj[2] +
        argObj[3] +
        argObj[4] +
        argObj[5] +
        argObj[6];
      return monthString;
    }

    var sql = `
    SELECT Sources.source_name, Entries.amount, Entries.entry_date, Sources.type, Entries.user_uuid
    FROM Sources
    JOIN Entries 
    ON Sources.uuid=Entries.source_uuid
    WHERE Entries.user_uuid='${req.params.userid}'
    ORDER BY Entries.entry_date DESC
    `;

    db.sequelize.query(sql).then(function(result) {
      //Find the latest values for each source
      let allEntries = result[0];

      //Find out all of the months logged by the user
      let encounteredMonths = [];
      for (var i = 0; i < allEntries.length; i++) {
        let month = makeMonthString(allEntries[i]);
        if (encounteredMonths.indexOf(month) === -1) {
          encounteredMonths.push(month);
        }
      }

      //For every month on file
      let responseObj = [];

      for (let i = 0; i < encounteredMonths.length; i++) {
        console.log(encounteredMonths[i]);
        //Create new month object
        let singleMonthObj = {
          month: encounteredMonths[i],
          liquid: [],
          frozen: [],
          liabilities: []
        };

        //Push in each transaction into the appropriate category
        for (let i = 0; i < allEntries.length; i++) {
          let entryMonth = makeMonthString2(allEntries[i].entry_date);
          if (entryMonth === singleMonthObj.month) {
            if (allEntries[i].type === "Liquid Asset") {
              let newObj = {};
              newObj.source_name = allEntries[i].source_name;
              newObj.type = allEntries[i].type;
              newObj.amount = allEntries[i].amount;
              newObj.entry_date = allEntries[i].entry_date;
              singleMonthObj.liquid.push(newObj);
            }
            if (allEntries[i].type === "Frozen Asset") {
              let newObj = {};
              newObj.source_name = allEntries[i].source_name;
              newObj.type = allEntries[i].type;
              newObj.amount = allEntries[i].amount;
              newObj.entry_date = allEntries[i].entry_date;
              singleMonthObj.frozen.push(newObj);
            }
            if (allEntries[i].type === "Liability") {
              let newObj = {};
              newObj.source_name = allEntries[i].source_name;
              newObj.type = allEntries[i].type;
              newObj.amount = allEntries[i].amount;
              newObj.entry_date = allEntries[i].entry_date;
              singleMonthObj.liabilities.push(newObj);
            }
          }
        }
        responseObj.push(singleMonthObj);
      }
      //============================================================================================================================================
      let finalResponse = [];
      for (let i = 0; i < responseObj.length; i++) {
        let myObj = {
          month: responseObj[i].month,
          liquidsAccum: 0,
          frozensAccum: 0,
          liabilitiesAccum: 0
        };
        let x = responseObj[i];
        let liquids = x.liquid;
        let frozens = x.frozen;
        let liabilities = x.liabilities;

        for (let j = 0; j < liquids.length; j++) {
          myObj.liquidsAccum += liquids[j].amount;
        }
        for (let j = 0; j < frozens.length; j++) {
          myObj.frozensAccum += frozens[j].amount;
        }
        for (let j = 0; j < liabilities.length; j++) {
          myObj.liabilitiesAccum += liabilities[j].amount;
        }
        console.log(myObj.liquidsAccum);
        console.log(myObj.frozensAccum);
        console.log(myObj.liabilitiesAccum);
        finalResponse.push(myObj);
      }
      res.send(finalResponse);
      // res.json(responseObj);
      //============================================================================================================================================
      //============================================================================================================================================
    });
  });
};
