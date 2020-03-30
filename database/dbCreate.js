const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "database",
  port: "3306",
  user: "root",
  password: "password"
});

connect.connect(err => {
  if (err) throw err;
  console.log("CONNECTED");
  connect.query("CREATE DATABASE IF NOT EXISTS locationInfo", error => {
    if (error) throw error;
    console.log("database created");
    connect.end();
  });
});
