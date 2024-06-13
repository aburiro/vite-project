import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function BookCard({ book }) {  // Receive the 'book' object as a prop
  const { volumeInfo } = book; // Extract volumeInfo for easier access

  return (
    // Main card container
    <Card sx={{ maxWidth: 345 }}> 
      {/* Make the card clickable */}
      <CardActionArea>  
        {/* Book cover image */}
        <CardMedia
          component="img"             // Render the image as an <img> tag
          height="140"                // Set image height
          image={volumeInfo.imageLinks?.thumbnail || 'placeholder_image_url'} // Use book's thumbnail or a placeholder if not available
          alt={volumeInfo.title}     // Provide alt text for accessibility
        />

        {/* Card content (title and author) */}
        <CardContent>  
          {/* Book title */}
          <Typography gutterBottom variant="h5" component="div"> 
            {volumeInfo.title}      
          </Typography>
          {/* Author(s) */}
          <Typography variant="body2" color="text.secondary">
            Author(s): {volumeInfo.authors?.join(', ')} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BookCard; // Export the BookCard component for use in other files
