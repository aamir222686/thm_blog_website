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

export default function SingleCard({ post }) {

  let postedDate = new Date(post.date_added)

  return (
    <Card sx={{ minWidth: 275 }} style={{ margin: "20px" }}>
      <CardHeader subheader={`${postedDate.toDateString()}`}>
      </CardHeader>
      <Link href={`/${post._id}`}>
      <CardMedia
        component="img"
        height="250"
        image={`data:image/png;base64,${post.image}`}
        alt="THM Blog Image"
      />
      </Link>
      <CardContent>
        <Link href={`/${post._id}`}>
          <Typography variant="h6" color="text.primary">{post.title}</Typography>
        </Link>  
      </CardContent>
        <CardActions disableSpacing style={{display: "flex", justifyContent: "space-between"}}>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        <Link href={`/${post._id}`}><Button size="small">Read More</Button></Link>
      </CardActions>
    </Card>
  );
}