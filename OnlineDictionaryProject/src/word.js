var mysql = require("mysql");
var connection;
function connect() {
  connection = mysql.createConnection({
    host: "localhost",
    user: "ugurcan",
    password: "12345",
    database: "entries",
  });
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
}

function search(term, res) {
  connection.query(
    "SELECT * FROM entries WHERE word = " + connection.escape(term),
    function (err, rows, fields) {
      if (err) throw err;
      res.json(rows);
    }
  );
}
module.exports = { connect, search };
