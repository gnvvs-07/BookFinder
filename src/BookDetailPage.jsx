import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { TiArrowForward } from "react-icons/ti";
import { toast } from "react-toastify"; // Import the toast function
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
const BookDetailPage = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBookDetails = async () => {
    setLoading(true);
    setError("");
    const url = `https://openlibrary.org/works/${id}.json`; // Use the correct API endpoint

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBook(data);
    } catch (error) {
      setError("Failed to fetch book details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="#4fa3f7" size={50} />
        <p className="text-gray-700 ml-4">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }
  const handleCopy = () => {
    const link = window.location.href; // Get the current URL
    navigator.clipboard
      .writeText(link) // Copy the link to the clipboard
      .then(() => {
        toast.success("Link copied to clipboard!"); // Show success toast
      })
      .catch((err) => {
        console.error("Error copying link: ", err); // Handle any errors
        toast.error("Failed to copy link!"); // Show error toast
      });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {book && (
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
          {/* Book Title */}
          <div className="flex items-center">
            <h1 className="text-4xl font-extrabold text-gray-800">
              {book.title}
            </h1>
            <div
              className="cursor-pointer border-2 border-black rounded-full p-2 text-black hover:text-white hover:bg-black transition-colors duration-300 ease-in-out transform hover:scale-110"
            >
              <TiArrowForward onClick={handleCopy}/>
            </div>
          </div>

          {/* Book Author(s) */}
          <p className="text-lg text-gray-600 mt-2">
            {book.authors?.map((author) => author.name).join(", ")}
          </p>

          {/* Book First Publish Year */}
          {book.first_publish_year && (
            <p className="text-gray-500 mt-2">
              First Published: {book.first_publish_year}
            </p>
          )}

          {/* Book Subjects */}
          {book.subjects && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Subjects</h2>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                {book.subjects.map((subject, index) => (
                  <li key={index} className="text-gray-600">
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Book Details Link */}
          <div className="mt-8">
            <a
              href={`https://openlibrary.org/works/${id}`}
              className="text-blue-600 hover:text-blue-800 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              View more details on Open Library
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetailPage;
