import React, { useState } from 'react';
import { addBook } from '../service/api';

function AddBookForm({ refresh }) {
  const [book, setBook] = useState({ title: '', author: '', year: '', genre: '', status: 'Available' });

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book).then(() => {
      refresh();
      setBook({ title: '', author: '', year: '', genre: '', status: 'Available' });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Book</h2>
      <input name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
      <input name="year" placeholder="Year" value={book.year} onChange={handleChange} required />
      <input name="genre" placeholder="Genre" value={book.genre} onChange={handleChange} required />
      <select name="status" value={book.status} onChange={handleChange}>
        <option>Available</option>
        <option>Unavailable</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;


