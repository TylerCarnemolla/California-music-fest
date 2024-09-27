import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import shuttlebus from '../assets/images/shuttlebus.jpg'

export default function ShuttleCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {shuttlebus}
        title="little bus"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shuttle Service
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A shuttle service will be available free of charge to ticket holding attendees. 
          Please visit <span className='underline text-blue-700'>"www.VeniceBeachBus.com"</span> for pickup locations and times.
        </Typography>
      </CardContent>
   
    </Card>
  );
}