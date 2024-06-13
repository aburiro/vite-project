import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    // Main container for the footer
    <Box 
      sx={{ 
        bgcolor: 'background.paper',  // Set background color to default paper color
        p: 6                         // Add padding (6 units) on all sides
      }} 
      component="footer"            // Semantic HTML5 tag for the footer
    >
      {/* Copyright text */}
      <Typography 
        variant="body2"           // Use a small font size
        color="text.secondary"    // Set text color to secondary (usually gray)
        align="center"            // Center align the text
      >
        {'Copyright © My Online Bookstore '}  
        {new Date().getFullYear()}  
        {'.'}                   
      </Typography>
    </Box>
  );
}

export default Footer;
