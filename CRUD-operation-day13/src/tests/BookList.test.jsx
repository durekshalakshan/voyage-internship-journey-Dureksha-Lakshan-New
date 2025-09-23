import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";

describe("BookList", () => {
  const books = [
    { id: 1, title: "Book 1", author: "Author 1", year: "2001", genre: "Fiction" },
    { id: 2, title: "Book 2", author: "Author 2", year: "2002", genre: "Non-Fiction" },
  ];

  // Mock the window.confirm function at the top of your test file
  window.confirm = jest.fn(() => true);

  it("renders a list of books", () => {
    render(<BookList books={books} onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getByText("Book 1")).toBeInTheDocument();
    expect(screen.getByText("Author 2")).toBeInTheDocument();
  });

  it("calls onEdit when edit button clicked", () => {
    const onEdit = jest.fn();
    render(<BookList books={books} onEdit={onEdit} onDelete={() => {}} />);
    fireEvent.click(screen.getAllByText("Edit")[0]);
    expect(onEdit).toHaveBeenCalledWith(books[0]);
  });

  it("calls onDelete when a delete button is clicked and confirmed", () => {
    const onDelete = jest.fn();
    render(<BookList books={books} onEdit={() => {}} onDelete={onDelete} />);

    // Click the delete button for the first book
    fireEvent.click(screen.getAllByText("Delete")[0]);
    
    // Assert that window.confirm was called with the correct message
    expect(window.confirm).toHaveBeenCalledWith('Delete "Book 1"?');

    // Assert that onDelete was called with the correct book ID
    expect(onDelete).toHaveBeenCalledWith(1);
  });
});