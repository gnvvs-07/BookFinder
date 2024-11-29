import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Handle the search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-10">
        Discover Your Next Favorite Book
      </h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="w-full max-w-md mx-auto mb-6 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search for books..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </form>

      {/* Display Loading or Error Messages */}
      {loading && (
        <div className="flex justify-center items-center space-x-3">
          <ClipLoader color="#4fa3f7" size={50} />
          <p className="text-gray-700">Searching...</p>
        </div>
      )}
      {error && (
        <div className="text-center mt-4">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      )}

      {/* Placeholder Text */}
      {!loading && !error && (
        <div className="text-center mt-10 text-gray-500">
          <p className="text-lg">Start by searching for a book or author to explore more!</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
