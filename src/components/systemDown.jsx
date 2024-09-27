import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import system from '../assets/images/system.jpg'
export default function SystemCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {system}
        title="sytem of a down members"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          System of a Down
        </Typography>
        <Typography variant="body2" color="text.secondary">
        System of a Down, formed in Los Angeles in 1994, is an Armenian-American heavy metal band known for their groundbreaking fusion of metal, rock, and Middle Eastern influences. 
        </Typography>
      </CardContent>
      
    </Card>
  );
}