import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import foodtruck from '../assets/images/foodtruck.jpg'
export default function FoodCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {foodtruck}
        title="food truck"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Food and Beverages
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The venue will be outfitted with beer gardens and an assortment of food trucks
          and vendors. Favorites include Beach Cruiser Brewing, Pedros Tacos, Bum-Bum Burgers, and Sunburnt Seltzer.
        </Typography>
      </CardContent>
      
    </Card>
  );
}