import {  useEffect, useState } from "react"; 
import { getBooks,deleteBook } from "../service/api";

function BookList({ onEdit,refresh }) {
   const [books, setBooks] = useState([]);
   useEffect(
   () => {
      getBooks().then((res) => setBooks(res.data));
    }, [refresh]
   );
   const handleDelete=(id)=>{
      deleteBook(id).then(()=>setBooks(books.filter((book)=>book.id!==id)))

   };

   return(
      <div>
         <h2>📚 Library Books</h2>
         <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Title</th><th>Author</th><th>Year</th><th>Genre</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.year}</td>
              <td>{b.genre}</td>
              <td>{b.status}</td>
              <td>
                <button onClick={() => onEdit(b)}>Edit</button> {/* pass selected book */}
                <button onClick={() => handleDelete(b.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
   );



}
export default BookList;