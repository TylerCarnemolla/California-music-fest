import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import motley from '../assets/images/motley.png'
export default function MotleyCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {motley}
        title="Motley Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mötley Crüe
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Motley Crue, hailing from Los Angeles and formed in 1981, is an iconic rock band known for their
         rebellious attitude, wild antics, and chart-topping hits like "Kickstart My Heart" and "Dr. Feelgood." 
        </Typography>
      </CardContent>
      
    </Card>
  );
}