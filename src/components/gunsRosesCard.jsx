import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import guns_pic from '../assets/images/guns_pic.webp'
export default function GunsCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {guns_pic}
        title="Guns n Roses members"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Guns N' Roses
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Guns N' Roses, formed in Los Angeles in 1985, is an iconic American rock
         band known for their explosive performances and classic hits like "Sweet Child o' Mine" and "Welcome to the Jungle."
        </Typography>
      </CardContent>
      
    </Card>
  );
}