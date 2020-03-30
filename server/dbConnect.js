const mysql = require("mysql");

const db = mysql.createConnection({
  host: "database",
  port: "3306",
  user: "root",
  password: "password",
  database: "locationInfo"
});

db.connect();

module.exports = db;
