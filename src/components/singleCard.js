import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import { CardHeader } from '@mui/material';
import Link from 'next/link';

export default function SingleCard({ post, clicked }) {

  let postedDate = new Date(post.date_added)

  return (
    <Card sx={{ minWidth: { xs: 312, md: 364 } }} style={{ margin: "10px" }}>
      <CardHeader subheader={`${postedDate.toDateString()}`}>
      </CardHeader>
      <Link onClick={() => clicked(true)} href={`${post._id}`}>
      <CardMedia
        component="img"
        height="250"
        image={`${post.image}`}
        alt="THM Blog Image"
      />
      </Link>
      <CardContent>
        <Link onClick={() => clicked(true)} href={`${post._id}`}>
          <Typography variant="h6" color="text.primary">{post.title}</Typography>
          <Typography variant="body2" color="text.secondary">{post.description}</Typography>
        </Link>  
      </CardContent>
        <CardActions disableSpacing style={{display: "flex", justifyContent: "space-between"}}>
          <IconButton aria-label="share">
            <ShareIcon sx={{color: "#a0d7d9"}}/>
          </IconButton>
        <Link onClick={() => clicked(true)} href={`${post._id}`}><Button sx={{color: "#a0d7d9"}} size="small">Continue Reading...</Button></Link>
      </CardActions>
    </Card>
  );
}