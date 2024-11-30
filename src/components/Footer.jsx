import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";

const Footer = () => {
  const [isStarred, setIsStarred] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleStarRepo = async () => {
    const token = import.meta.env.VITE_GITHUB; // Replace with your GitHub token
    const repoOwner = "gnvvs-07"; // Replace with the repo owner
    const repoName = "BookFinder"; // Replace with your repository name

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/user/starred/${repoOwner}/${repoName}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 204) {
        setIsStarred(true);
        alert("Thank you for starring the repo!");
      } else if (response.status === 401) {
        alert("Authentication failed. Please check your token.");
      } else {
        alert("Failed to star the repo. Please try again later.");
      }
    } catch (error) {
      console.error("Error starring the repo:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-4 items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} findMyBook. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link
              to="/policy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <button
              onClick={handleStarRepo}
              className={`px-4 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Starring..." : isStarred ? "Starred ⭐" : "Star Repo"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
