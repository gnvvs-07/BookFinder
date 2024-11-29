import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer for global notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import HomePage from './HomePage';
import BookDetailPage from './BookDetailPage';
import BookSearchPage from './BookSearchPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      {/* Header should be present on all pages */}
      <Header />
      
      {/* The Routes for different pages */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Book detail page with dynamic id */}
        <Route path="/book/:id" element={<BookDetailPage />} />
        
        {/* Book search page with dynamic name */}
        <Route path="/search/:name" element={<BookSearchPage />} />
      </Routes>
      
      {/* Toast container for displaying notifications globally */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
