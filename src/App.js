import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import BookCard from './components/BookCard'; // Updated component import
import AboutUs from './components/AboutUs'; // Updated component import

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Define your routes */}
          <Route path="/all-books" element={<BookCard />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Add more routes for other sections/pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
