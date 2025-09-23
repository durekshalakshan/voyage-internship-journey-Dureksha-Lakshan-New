// src/App.jsx
import { useState, useContext, useMemo } from "react";
import { BookContext, BookProvider } from "./context/BookContext";
import BookForm from "./components/BookForm.jsx";
import BookList from "./components/BookList.jsx";
import Pagination from "./components/Pagination.jsx";
import SearchFilter from "./components/SearchFilter.jsx";
import BookListSkeleton from "./components/BookListSkeleton.jsx";
import useDebounce from "./hooks/useDebounce.js";
import mockBooks from "./data/mockBooks";
import "./styles.css";

function AppContent() {
  const { books, setBooks, selectedBook, setSelectedBook } = useContext(BookContext);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 3;

  // Simulate loading data
  useMemo(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setBooks(mockBooks);
      setLoading(false);
    }, 500); // simulate async fetch
    return () => clearTimeout(timer);
  }, [setBooks]);

  // Debounced search
  const debouncedSearch = useDebounce(search, 300);

  // Filtered books
  const filtered = useMemo(() => {
    return books.filter(
      (b) =>
        b.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        b.author.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [books, debouncedSearch]);

  // Pagination
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

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

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Book Management</h1>
      <BookForm
        onSave={handleSave}
        selectedBook={selectedBook}
        onCancel={() => setSelectedBook(null)}
      />
      <SearchFilter search={search} setSearch={setSearch} />
      {loading ? (
        <BookListSkeleton />
      ) : (
        <BookList books={paginated} onEdit={setSelectedBook} onDelete={handleDelete} />
      )}
      <Pagination
        total={filtered.length}
        perPage={perPage}
        current={page}
        onPageChange={setPage}
      />
    </div>
  );
}

// Wrap AppContent with BookProvider
export default function App() {
  return (
    <BookProvider>
      <AppContent />
    </BookProvider>
  );
}