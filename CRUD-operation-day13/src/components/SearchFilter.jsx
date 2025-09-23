import React from 'react';

export default function SearchFilter({ search, setSearch }) {
  return (
    <div className="mb-6">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title or author..."
        className="w-full p-4 rounded-2xl border border-gray-300 shadow-inner focus:ring-2 focus:ring-purple-400 focus:outline-none transition transform hover:scale-101"
      />
    </div>
  );
}
