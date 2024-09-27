import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import sublime from '../assets/images/sublime.jpg'
export default function SublimeCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= {sublime}
        title="Sublime members"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sublime
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Sublime, originating from Long Beach, California, and formed in 1988, is an influential
         ska punk and reggae rock band known for their eclectic sound and hits like "What I Got" and "Santeria."
        </Typography>
      </CardContent>
      
    </Card>
  );
}