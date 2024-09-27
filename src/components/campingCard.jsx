import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import camping from '../assets/images/camping.jpg'
import Typography from '@mui/material/Typography';

export default function CampCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {camping}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Camping and Overnight Stay
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Campgrounds will be available for a fee payed to Los Angeles County. Campgrounds 
          will be marked on event maps downloadable from Los Angeles County Website. Visit  
          <span className='underline text-blue-700'> www.VisitVenice.com/kings</span> for a Hotel directory.
        </Typography>
      </CardContent>

    </Card>
  );
}