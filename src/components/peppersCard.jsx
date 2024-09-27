import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import peppers_logo from '../assets/images/peppers_logo.jpg'
export default function PeppersCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {peppers_logo}
        title="Anthony Kiedis"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Red Hot Chili Peppers
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Red Hot Chili Peppers, formed in Los Angeles in 1983, are renowned for their infectious funk-rock sound and iconic hits like "Under the Bridge" and "Californication."
        </Typography>
      </CardContent>
      
    </Card>
  );
}