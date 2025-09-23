import { useState, useEffect } from "react";

export default function BookForm({ onSave, selectedBook, onCancel }) {
  const [book, setBook] = useState({ title: "", author: "", year: "", genre: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedBook) setBook(selectedBook);
  }, [selectedBook]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.year || !book.genre) {
      setError("All fields are required!");
      return;
    }
    if (isNaN(book.year) || book.year.length !== 4) {
      setError("Year must be a valid 4-digit number!");
      return;
    }
    onSave(book);
    setBook({ title: "", author: "", year: "", genre: "" });
    setError("");
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-200 to-indigo-100 p-8 rounded-3xl shadow-2xl mb-8 transform hover:scale-102 transition-all duration-300">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700 drop-shadow-md">
        {selectedBook ? "Edit Book" : "Add Book"}
      </h2>
      {error && <p className="text-red-600 font-semibold mb-4 animate-pulse">{error}</p>}
      <form onSubmit={handleSubmit} className="grid gap-5">
        <input
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Book Title"
          className="p-4 rounded-xl border border-gray-300 shadow-inner focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        <input
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
          className="p-4 rounded-xl border border-gray-300 shadow-inner focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        <input
          name="year"
          value={book.year}
          onChange={handleChange}
          placeholder="Year (YYYY)"
          className="p-4 rounded-xl border border-gray-300 shadow-inner focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        <input
          name="genre"
          value={book.genre}
          onChange={handleChange}
          placeholder="Genre"
          className="p-4 rounded-xl border border-gray-300 shadow-inner focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        <div className="flex gap-5 justify-center mt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300"
          >
            {selectedBook ? "Update" : "Add"}
          </button>
          {selectedBook && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-xl shadow-md hover:bg-gray-400 hover:scale-105 transition transform duration-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}