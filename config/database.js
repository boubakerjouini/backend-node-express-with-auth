var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "fatma",
  port: 8889,
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Database Connected Successfully..!!");
  }
});

module.exports = connection;
