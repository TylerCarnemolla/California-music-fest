import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import stupid from '../assets/images/slightly_stupid.jpg'
export default function StupidCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {stupid}
        title="Slightly Stupid"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Slightly Stupid
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Slightly Stoopid is was formed in Ocean Beach, San Diego, in 1995. They are known for their eclectic blend of reggae, rock, punk, and 
        blues, creating a unique and infectious sound that appeals to a wide range of music lovers. Hits  include "2 AM" and "Closer to the Sun."
        </Typography>
      </CardContent>
      
    </Card>
  );
}