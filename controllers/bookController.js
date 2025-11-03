const db = require("../db");

// ✅ Get all books
exports.getAllBooks = (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

// ✅ Add a new book
exports.addBook = (req, res) => {
  const { title, author, genre, year, status } = req.body;

  // 🔧 FIXED: changed 'published_year' → 'year'
  const query = "INSERT INTO books (title, author, genre, year, status) VALUES (?,?,?,?,?)";

  db.query(query, [title, author, genre, year, status], (err, result) => {
    if (err) res.status(500).send(err);
    else
      res
        .status(201)
        .json({ id: result.insertId, title, author, genre, year, status });
  });
};

// ✅ Update a book
exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, genre, year, status } = req.body;

  // 🔧 FIXED: changed 'published_year' → 'year'
  const query =
    "UPDATE books SET title=?, author=?, genre=?, year=?, status=? WHERE id=?";

  db.query(query, [title, author, genre, year, status, id], (err, result) => {
    if (err) res.status(500).send(err);
    else res.json({ message: "Book updated successfully" });
  });
};

// ✅ Delete a book
exports.deleteBook = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM books WHERE id=?";

  db.query(query, [id], (err, result) => {
    if (err) res.status(500).send(err);
    else res.json({ message: "Book deleted successfully" });
  });
};
