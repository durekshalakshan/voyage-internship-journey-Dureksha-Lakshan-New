import { useState } from "react";
import BookForm from './components/BookForm.jsx';
import BookList from './components/BookList.jsx';
import Pagination from './components/Pagination.jsx';
import SearchFilter from './components/SearchFilter.jsx';
import mockBooks from "./data/mockBooks";
import './styles.css';


export default function App() {
  const [books, setBooks] = useState(mockBooks);
  const [selectedBook, setSelectedBook] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 3;

  // Add or update book
  const handleSave = (book) => {
    if (book.id) {
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    } else {
      book.id = Date.now();
      setBooks([...books, book]);
    }
    setSelectedBook(null);
  };

  // Delete book
  const handleDelete = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  // Search + filter
  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Book Management</h1>
      <BookForm onSave={handleSave} selectedBook={selectedBook} onCancel={() => setSelectedBook(null)} />
      <SearchFilter search={search} setSearch={setSearch} />
      <BookList books={paginated} onEdit={setSelectedBook} onDelete={handleDelete} />
      <Pagination total={filtered.length} perPage={perPage} current={page} onPageChange={setPage} />
    </div>
  );
}
