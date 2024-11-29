import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import BookCard from './components/BookCard';

function BookSearchPage() {
  const { name } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch books based on search name
  const fetchBooksBySearch = async () => {
    setLoading(true);
    setError("");
    const url = `https://openlibrary.org/search.json?q=${name}&limit=10`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.docs); // Update books with search results
    } catch (error) {
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooksBySearch();
  }, [name]); // Re-fetch when the search query changes

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Search Results for: "{name}"</h1>

      {/* Display Loading or Error Messages */}
      {loading && (
        <div className="flex justify-center items-center">
          <ClipLoader color="#4fa3f7" size={50} />
          <p className="text-gray-700 ml-4">Loading...</p>
        </div>
      )}
      {error && (
        <div className="text-center">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      )}

      {/* Display Search Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {books.map((book) => (
          <BookCard key={book.key} book={book} /> // Use the BookCard component
        ))}
      </div>
    </div>
  );
}

export default BookSearchPage;
