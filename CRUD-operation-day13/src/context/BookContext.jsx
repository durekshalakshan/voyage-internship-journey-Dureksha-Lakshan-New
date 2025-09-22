// src/context/BookContext.js
import { createContext, useState } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <BookContext.Provider value={{ books, setBooks, selectedBook, setSelectedBook }}>
      {children}
    </BookContext.Provider>
  );
}
