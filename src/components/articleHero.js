import * as React from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect } from 'react';
// Share modal import
import ShareModal from "../components/socialShare";

function ArticleHero({ image, title, date, author, articleId }) {
    let postedDate = new Date(date);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log("CLOSE TRIGGERED")
        setOpen(false);
    };

    useEffect(() => {
        const addCount = async () => {
            const res = await fetch(`https://thm-backend-server.fly.dev/updateViewCount`, {
                method: "POST",
                body: JSON.stringify({
                    "id" : articleId
                })
            })
                    if (res.status == 200) {
                        let data = await res.json()
                        console.log(data)
                    } else {
                        console.log("Error updating count...")
                    }
            };
            addCount();
    }, [articleId])

    return (
        <Grid container sx={{
                backgroundColor: "#272727",
                borderRadius: "20px",
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
                <Grid item xs={12} md={6} sx={{padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "black"}}>
                    <Typography sx={{ typography: { xs: 'h4', md: 'h3' }, textDecoration: "underline", textDecorationColor: "#5200ff" }} color="text.primary" marginBottom={1}>{title}</Typography>
                    <Divider />
                    <Stack direction="row" marginTop={2} sx={{display: "flex", justifyContent: "space-between"}}>
                        <Typography variant="body2" sx={{fontFamily: "Anton, sans-serif",letterSpacing: "2px",textShadow: "2px 2px 2px #5200ff"}}>{postedDate.toDateString()}</Typography>
                        <Typography variant="body2" sx={{fontFamily: "Anton, sans-serif",letterSpacing: "2px",textShadow: "2px 2px 2px #5200ff"}}>Author: {author.toUpperCase()}</Typography>
                    </Stack>
                    <Stack direction="row" marginTop={4} sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
                        <IconButton aria-label="share" onClick={handleOpen}>
                            <ShareIcon />
                        </IconButton>
                </Stack>
                <ShareModal postId={articleId} title={title} open={open} onClose={handleClose}/>
                </Grid>
        </Grid>
    )
}

export default ArticleHero;