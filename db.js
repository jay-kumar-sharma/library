const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",             // your MySQL password
  database: "library_db",   // ✅ make sure this database exists
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to DB:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

module.exports = db;
