import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";

describe("BookList Component", () => {
  const sampleBooks = [
    { id: 1, title: "Book One", author: "Author A", year: 2020, genre: "Fiction" },
    { id: 2, title: "Book Two", author: "Author B", year: 2021, genre: "Non-Fiction" },
  ];

  test("renders 'No books found.' when list is empty", () => {
    render(<BookList books={[]} onEdit={jest.fn()} onDelete={jest.fn()} />);
    expect(screen.getByText(/no books found/i)).toBeInTheDocument();
  });

  test("renders books and triggers delete action", () => {
    const handleDelete = jest.fn();
    render(<BookList books={sampleBooks} onEdit={jest.fn()} onDelete={handleDelete} />);

    // Check first book title is rendered
    expect(screen.getByText("Book One")).toBeInTheDocument();

    // Mock confirm dialog
    window.confirm = jest.fn(() => true);

    // Click delete
    fireEvent.click(screen.getAllByText(/delete/i)[0]);

    expect(window.confirm).toHaveBeenCalledWith('Delete "Book One"?');
    expect(handleDelete).toHaveBeenCalledWith(1);
  });
});
