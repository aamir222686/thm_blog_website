import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { CardHeader } from '@mui/material';

export default function SingleCard() {

  return (
    <Card sx={{ maxWidth: 385 }} style={{ margin: "20px" }}>
      <CardHeader subheader="February 02, 2023">
      </CardHeader>
      <CardMedia
        component="img"
        height="250"
        image="https://via.placeholder.com/500"
        alt="THM Blog Image"
      />
      <CardContent>
        <Typography variant="h6" color="text.primary">TITLE</Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{display: "flex", justifyContent: "space-between"}}>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}