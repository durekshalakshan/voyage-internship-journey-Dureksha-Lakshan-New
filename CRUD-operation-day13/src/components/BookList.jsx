export default function BookList({ books, onEdit, onDelete }) {
  return (
    <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 p-8 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-purple-700 drop-shadow-md">Books</h2>
      {books.length === 0 ? (
        <p className="text-gray-600 text-center italic">No books found.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full border-collapse text-center">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-300 to-purple-300 text-white">
                <th className="p-4 border">Title</th>
                <th className="p-4 border">Author</th>
                <th className="p-4 border">Year</th>
                <th className="p-4 border">Genre</th>
                <th className="p-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr
                  key={book.id}
                  className="bg-white hover:bg-indigo-50 transition-all transform hover:scale-101"
                >
                  <td className="border p-3 font-medium">{book.title}</td>
                  <td className="border p-3">{book.author}</td>
                  <td className="border p-3">{book.year}</td>
                  <td className="border p-3">{book.genre}</td>
                  <td className="border p-3 flex gap-2 justify-center">
                    <button
                      onClick={() => onEdit(book)}
                      className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-xl shadow-md transition transform hover:scale-105"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete "${book.title}"?`)) onDelete(book.id);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl shadow-md transition transform hover:scale-105"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
