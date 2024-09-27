import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import deftones from '../assets/images/deftones.webp'
export default function DeftonesCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {deftones}
        title="deftones cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Deftones
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Deftones, formed in Sacramento, California, in 1988, are an influential American alternative metal band known for their distinctive blend of heavy riffs, dreamy 
        atmospheres, and haunting vocals. Hits include "Change" and "My Own Summer." 
        </Typography>
      </CardContent>
      
    </Card>
  );
}