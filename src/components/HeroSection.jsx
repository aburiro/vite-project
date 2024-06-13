import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookSearchForm from "./BookSearchForm";
import BookCard from "./BookCard";

function HeroSection({ onSearch, books }) { // Receives search function and book data as props
  return (
    <div>
      {/* Header Section */}
      <AppBar position="static"> 
        <Toolbar>
          {/* Bookstore Logo (Optional) */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Online Bookstore
          </Typography>

          {/* Search Bar Component */}
          <BookSearchForm onSearch={onSearch} />  

          {/* Navigation Buttons */}
          <Button color="inherit">Home</Button>
          <Button color="inherit">Browse</Button>
          <Button color="inherit">About</Button>

          {/* Shopping Cart Icon (Optional) */}
          <Button color="inherit">
            <ShoppingCartIcon />
          </Button>
        </Toolbar>
      </AppBar>

      {/* Book List Section */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}> 
        {books.map((book) => (
          <BookCard key={book.id} book={book} /> // Map over books array and render BookCard for each
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
