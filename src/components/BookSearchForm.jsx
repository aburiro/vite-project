// BookSearchForm.jsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function BookSearchForm({ onSearch }) { // Receive the onSearch function as a prop from the parent
  const [searchTerm, setSearchTerm] = useState(''); // State to store the current search term

  const handleSubmit = (event) => {
    event.preventDefault();           // Prevent default form submission behavior
    onSearch(searchTerm);             // Call the onSearch prop with the current search term
  };

  return (
    // Form to handle book search
    <form onSubmit={handleSubmit}> 
      {/* Input field for search term */}
      <TextField 
        label="Search Books"     // Label for the input field
        variant="outlined"       // Style variant for the input field
        value={searchTerm}       // Bind the value to the searchTerm state
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
      />

      {/* Submit button to trigger the search */}
      <Button type="submit" variant="contained">
        Search
      </Button>
    </form>
  );
}

export default BookSearchForm; // Export the component to be used in other parts of your application
