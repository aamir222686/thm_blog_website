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
import Chip from '@mui/material/Chip';

// Share modal import
import ShareModal from "../components/socialShare";

export default function SingleCard({ post, clicked }) {
  let postedDate = new Date(post.date_added);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("CLOSE TRIGGERED")
    setOpen(false);
  };

  const categoryChip = (category) => {
    if (category == "startup") {
      return <a style={{justifySelf: "flex-end", alignSelf: "flex-end"}} href={`/${category}`}><Chip sx={{ textTransform: "capitalize", cursor: "pointer", justifySelf: "flex-end", alignSelf: "flex-end", margin: "10px", fontSize: "0.7rem", fontWeight: "bold", backgroundColor: "#5200ff", color: "white", borderRadius: 0}} label={`${category}`} variant="filled" size="small" /></a>
    }
    if (category == "technology") {
      return <a style={{justifySelf: "flex-end", alignSelf: "flex-end"}} href={`/${category}`}><Chip sx={{ textTransform: "capitalize", cursor: "pointer", justifySelf: "flex-end", alignSelf: "flex-end", margin: "10px", fontSize: "0.7rem", fontWeight: "bold", backgroundColor: "#5200ff", color: "white", borderRadius: 0}} label={`${category}`} variant="filled" size="small" /></a>
    }
    if (category == "ai") {
      return <a style={{justifySelf: "flex-end", alignSelf: "flex-end"}} href={`/${category}`}><Chip sx={{ textTransform: "capitalize", cursor: "pointer", justifySelf: "flex-end", alignSelf: "flex-end", margin: "10px", fontSize: "0.7rem", fontWeight: "bold", backgroundColor: "#5200ff", color: "white", borderRadius: 0}} label={`${category}`} variant="filled" size="small" /></a>
    }
    if (category == "science") {
      return <a style={{justifySelf: "flex-end", alignSelf: "flex-end"}} href={`/${category}`}><Chip sx={{ textTransform: "capitalize", cursor: "pointer", justifySelf: "flex-end", alignSelf: "flex-end", margin: "10px", fontSize: "0.7rem", fontWeight: "bold", backgroundColor: "#5200ff", color: "white", borderRadius: 0}} label={`${category}`} variant="filled" size="small" /></a>
    }
    if (category == "entertainment") {
      return <a style={{justifySelf: "flex-end", alignSelf: "flex-end"}} href={`/${category}`}><Chip sx={{ textTransform: "capitalize", cursor: "pointer", justifySelf: "flex-end", alignSelf: "flex-end", margin: "10px", fontSize: "0.7rem", fontWeight: "bold", backgroundColor: "#5200ff", color: "white", borderRadius: 0}} label={`${category}`} variant="filled" size="small" /></a>
    }
  }

  return (
    <Card sx={{ minWidth: { xs: 312, md: 364 }, minHeight: "300px",margin: "10px",transition: "0.3s", boxShadow: "5px 5px 6px #5200ff", backgroundColor: "black", "&:hover": {boxShadow: "2px 2px 6px #5200ff"} }}>
      <CardHeader subheader={`${postedDate.toDateString()}`}>
      </CardHeader>
      <Link onClick={() => clicked(true)} href={`post/${post._id}`}>
      <CardMedia
        component="img"
        height="250"
        image={`${post.image}`}
        alt="THM Blog Image"
      />
      </Link>
      <CardContent sx={{display: "flex", flexDirection: "column"}}>
          {categoryChip(post.category)}
        <Link onClick={() => clicked(true)} href={`post/${post._id}`}>
          <Typography variant="h6" color="text.primary" sx={{paddingBottom: "10px", minHeight: "75px", textDecoration: "underline", textDecorationColor: "#5200ff"}}>{post.title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{maxHeight: "100px", overflow: "hidden"}}>{post.description.slice(0,175)}...</Typography>
        </Link>  
      </CardContent>
        <CardActions disableSpacing style={{display: "flex", justifyContent: "space-between"}}>
        <IconButton aria-label="share" onClick={handleOpen}>
            <ShareIcon sx={{color: "white"}}/>
          </IconButton>
        <Link onClick={() => clicked(true)} href={`post/${post._id}`}><Button sx={{color: "white", textDecoration: "underline", textDecorationColor: "#5200ff"}} size="small">Read Article</Button></Link>
      </CardActions>
      <ShareModal postId={post._id} title={post.title} open={open} onClose={handleClose}/>
    </Card>
  );
}