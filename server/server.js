const express = require("express");
const app = express();
const path = require("path");
const PORT = 4001;
const db = require("./dbConnect.js");

app.use(express.static(path.join(__dirname, "../public/")));

app.get("/api/location/:locationId", (req, res) => {
  const { locationId } = req.params;
  db.query(`SELECT * FROM locations WHERE id=${locationId}`, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
});

app.get("/api/user/:locationId", (req, res) => {
  const { locationId } = req.params;
  db.query(
    `SELECT * FROM users, locations WHERE locations.id=${locationId} AND locations.userId = users.id`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json(result);
      }
    }
  );
});

app.get("/api/amenities/:locationId", (req, res) => {
  const { locationId } = req.params;
  db.query(
    `SELECT * FROM amenities WHERE amenities.location_id = ${locationId}`,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json(result);
      }
    }
  );
});

app.listen(PORT, console.log(`listening http://localhost:${PORT}`));
