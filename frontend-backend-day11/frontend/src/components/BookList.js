import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        if (isMounted) setBooks(data);
      } catch (err) {
        if (isMounted) setError(err.message || 'Failed to fetch books');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBooks();
    return () => { isMounted = false; };
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
