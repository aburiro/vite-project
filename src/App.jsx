import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "./components/HeroSection"; // Import the HeroSection component
import Footer from "./components/Footer";        // Import the Footer component
import './App.css';                             // Import custom CSS for styling

function App() {
  // State to store fetched book data
  const [books, setBooks] = useState([]);  

  // Fetch initial books on component mount
  useEffect(() => { 
    fetchBooks("popular");  // Fetch popular books by default
  }, []);                    // Empty dependency array means this runs once on mount

  // Function to fetch books from the Google Books API
  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: { q: query }, // Pass the search query as a parameter
        }
      );

      // Update the books state with the fetched data, 
      // handle the case where there might be no results 
      setBooks(response.data.items || []); 
    } catch (error) {
      console.error("Error fetching books:", error);
      // In a real application, you'd likely display an error message to the user
    }
  };

  return (
    <div>
      {/* Render the HeroSection (header and book list) */}
      <HeroSection books={books} onSearch={fetchBooks} /> 

      {/* Render the Footer */}
      <Footer />  
    </div>
  );
}

export default App;
