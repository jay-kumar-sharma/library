// src/components/EditBookForm.jsx
import React, { useState, useEffect } from "react";
import { updateBook } from "../service/api";

function EditBookForm({ book, onCancel, refresh }) {
  const [updatedBook, setUpdatedBook] = useState(book);

  // update state when book changes
  useEffect(() => {
    setUpdatedBook(book);
  }, [book]);

  const handleChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(updatedBook.id, updatedBook).then(() => {
      refresh();
      onCancel(); // hide form
    });
  };

  if (!book) return null;

  return (
    <form onSubmit={handleSubmit}>
      <h2>✏️ Edit Book</h2>
      <input
        name="title"
        placeholder="Title"
        value={updatedBook.title}
        onChange={handleChange}
        required
      />
      <input
        name="author"
        placeholder="Author"
        value={updatedBook.author}
        onChange={handleChange}
        required
      />
      <input
        name="year"
        placeholder="Year"
        value={updatedBook.year}
        onChange={handleChange}
        required
      />
      <input
        name="genre"
        placeholder="Genre"
        value={updatedBook.genre}
        onChange={handleChange}
        required
      />
      <select name="status" value={updatedBook.status} onChange={handleChange}>
        <option>Available</option>
        <option>Unavailable</option>
      </select>

      <div style={{ marginTop: "10px" }}>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EditBookForm;
