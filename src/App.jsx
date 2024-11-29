import React, { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [books, setBooks] = useState([]); // State to hold book results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  // Fetch books from Open Library API
  const fetchBooks = async () => {
    setLoading(true);
    setError("");
    const url = `https://openlibrary.org/search.json?q=${searchQuery}&limit=12`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      fetchBooks();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Open Library Book Search
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mb-6 text-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for books, authors, or titles"
            className="px-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 ml-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </form>

        {/* Display Loading or Error Messages */}
        {loading && <p className="text-center text-xl text-blue-500">Loading...</p>}
        {error && <p className="text-center text-xl text-red-500">{error}</p>}

        {/* Display Books */}
        {books.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div
                key={book.key}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 truncate">{book.title}</h3>
                  {book.author_name && (
                    <p className="text-gray-600">{book.author_name.join(", ")}</p>
                  )}
                  {book.first_publish_year && (
                    <p className="text-gray-500">First Published: {book.first_publish_year}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No books found message */}
        {books.length === 0 && !loading && (
          <p className="text-center text-xl text-gray-500">No books found. Try another search.</p>
        )}
      </div>
    </div>
  );
}

export default App;
