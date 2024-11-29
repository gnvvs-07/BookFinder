import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const bookId = book.key.replace("/works/", "");

  // Check if cover_i exists, else use a default placeholder
  const coverImageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/300x450?text=No+Image+Available"; // Use a placeholder image

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <img
        src={coverImageUrl} // Use the cover image or fallback to placeholder
        alt={book.title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {book.title}
        </h3>
        <p className="text-gray-600">
          {book.author_name?.join(", ")} {/* Use author_name instead of authors */}
        </p>
        {/* Corrected Link */}
        <Link
          to={`/book/${bookId}`} // Link to the correct URL format
          className="text-blue-500 mt-4 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
