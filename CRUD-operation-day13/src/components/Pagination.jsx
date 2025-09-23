import React from 'react'; 

export default function Pagination({ total, perPage, current, onPageChange }) {
  const totalPages = Math.ceil(total / perPage);
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-6 gap-3">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-5 py-2 rounded-xl font-bold shadow-md transition transform hover:scale-105 ${
            current === i + 1 ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}