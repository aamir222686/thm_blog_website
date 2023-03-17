import * as React from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import {Button, Link} from '@mui/material';
// Share modal import
import ShareModal from "../components/socialShare";

function HomePageHero({ image, title, date, author, articleId, description }) {
    let postedDate = new Date(date);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log("CLOSE TRIGGERED")
        setOpen(false);
    };

    return (
        <Grid container sx={{
                backgroundColor: "#272727",
                borderRadius: "0px",
                display: "flex"
            }}>
                <Grid item xs={12} md={6} sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundImage: `url(${image})`,
                    minHeight: {"xs": "324px", "md": "512px"},
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                </Grid>
            <Grid item xs={12} md={6} sx={{ padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "black" }}>
                    
                    <Link href={`post/${articleId}`}><Typography sx={{ typography: { xs: 'h3', md: 'h2' }, textDecoration: "underline", textDecorationColor: "#5200ff" }} color="text.primary" marginBottom={1}>{title}</Typography></Link>
                    <Divider />
                    <Stack direction="row" marginTop={2} sx={{display: "flex", justifyContent: "space-between"}}>
                        <Typography variant="body2" sx={{fontFamily: "Anton, sans-serif",letterSpacing: "2px"}}>{postedDate.toDateString()}</Typography>
                        <Typography variant="body2" sx={{fontFamily: "Anton, sans-serif",letterSpacing: "2px"}}>Author: {author.toUpperCase()}</Typography>
                    </Stack>
                    <Stack direction="row" marginTop={2} sx={{display: "flex", justifyContent: "space-between"}}>
                            <Typography variant="body2">{description}</Typography>
                        </Stack>
                    <Stack direction="row" marginTop={4} sx={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                        <IconButton aria-label="share" onClick={handleOpen}>
                            <ShareIcon />
                        </IconButton>
                        <Link href={`post/${articleId}`}><Button sx={{color: "white", fontFamily: "Anton, sans-serif",letterSpacing: "2px", fontSize: "1rem"}} size="small">Read Article</Button></Link>
                    </Stack>
                <ShareModal postId={articleId} title={title} open={open} onClose={handleClose}/>
                </Grid>
        </Grid>
    )
}

export default HomePageHero;