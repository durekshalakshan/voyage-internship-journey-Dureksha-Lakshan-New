import React from 'react';

export default function BookListSkeleton() {
  return (
    <div className="p-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="h-12 bg-gray-200 rounded-lg mb-3 animate-pulse"
        ></div>
      ))}
    </div>
  );
}
