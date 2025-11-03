// src/App.jsx
import React, { useState } from "react";
import BookList from "./components/bookList";
import AddBookForm from "./components/addBookForm";
import EditBookForm from "./components/editBookForm";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const reload = () => setRefresh(!refresh);
  const handleEdit = (book) => setEditingBook(book);
  const cancelEdit = () => setEditingBook(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📖 Library Management System</h1>

      {!editingBook ? (
        <>
          <AddBookForm refresh={reload} />
          <BookList onEdit={handleEdit} refresh={refresh} />
        </>
      ) : (
        <EditBookForm
          book={editingBook}
          refresh={reload}
          onCancel={cancelEdit}
        />
      )}
    </div>
  );
}

export default App;
