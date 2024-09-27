import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Blink from '../assets/images/Blink.jpg'
export default function GreatfulCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {Blink}
        title="Blink-182"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Blink-182
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Blink-182, formed in Poway, California, in 1992, is a renowned American rock band known for 
        their energetic pop-punk sound and catchy hits like "All the Small Things" and "What's My Age Again?"
        </Typography>
      </CardContent>
      
    </Card>
  );
}