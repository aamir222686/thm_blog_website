import * as React from 'react';
import {
  FacebookShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    EmailShareButton,
    TwitterShareButton,
    TelegramShareButton
} from 'next-share';
import config from "../seo/config";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import Container from '@mui/material/Container';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Snackbar from '@mui/material/Snackbar';

// google analytics
import { event } from "nextjs-google-analytics";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 325,
    height: 100,
    bgcolor: '#262b32',
    border: '2px solid black',
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(82,0,255,1)"
};

export default function ShareModal(props) {
    const url = `${config.seoConfig.host}/post/${props.postId}`;
    const title = "THM | " + props.title;

    const [snackBar, setSnackBar] = React.useState(false);

    const handleOpenSnackBar = () => {
        setSnackBar(true);
    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setSnackBar(false);
    };

    // Handling google analytics share tracking
    const handleGoogleEvent = (platform) => {
        event("share", {
            category: "Share",
            label: platform,
            value: platform
        });
    }
    
    const handleCopyText = async () => {
        await navigator.clipboard.writeText(url);
        handleOpenSnackBar();
        handleGoogleEvent("clipboard")
        props.onClose();
    }

    return (
        <Container maxWidth="xl">
            <Modal
                open={ props.open}
                onClose={props.onClose}
                aria-labelledby="thm-share-modal"
                aria-describedby="thm-share-modal"
            >
                <Box sx={style}>
                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px"}}>
                        <ShareIcon sx={{ fontSize: "0.8rem", mr: "5px" }} />
                        <Typography variant='body1' sx={{
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}>SHARE</Typography>
                    </Box>
                    <Divider sx={{color: "#a0d7d9"}} />
                    <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "10px", width: "100%"}}>
                        <FacebookShareButton url={url} quote={title} hashtag={'#thm'} onClick={() => {props.onClose(); handleGoogleEvent("facebook")}}>
                            <FacebookIcon/>
                        </FacebookShareButton>
                        <WhatsappShareButton url={url} quote={title} separator=":: " onClick={() => {props.onClose(); handleGoogleEvent("whatsapp")}}>
                            <WhatsAppIcon/>
                        </WhatsappShareButton>
                        <LinkedinShareButton url={url} onClick={() => {props.onClose(); handleGoogleEvent("linkedin")}}>
                            <LinkedInIcon/>
                        </LinkedinShareButton>
                        <EmailShareButton url={url} subject={title} onClick={() => {props.onClose(); handleGoogleEvent("email")}}>
                            <EmailIcon/>
                        </EmailShareButton>
                        <TwitterShareButton url={url} quote={title} onClick={() => {props.onClose(); handleGoogleEvent("twitter")}}>
                            <TwitterIcon/>
                        </TwitterShareButton>
                        <TelegramShareButton url={url} quote={title} onClick={() => {props.onClose(); handleGoogleEvent("telegram")}} >
                            <TelegramIcon/>
                        </TelegramShareButton>
                        <Box onClick={() => handleCopyText()}>
                            <ContentCopyIcon sx={{cursor: "pointer"}}/>
                        </Box>
                    </Box>
                </Box>
            </Modal>
            <Snackbar open={snackBar} autoHideDuration={1500} onClose={handleCloseSnackBar} sx={{ backgroundColor: "#262b32", width: "250px", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "center" }}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <ContentCopyIcon sx={{mr: "10px", fontSize: "1.2rem", color: "#a0d7d9"}}/>
                    <Typography variant='body1' sx={{fontFamily: 'monospace', fontWeight: 700, color: "white"}}>Copied to Clipboard.</Typography>
                </Box>
            </Snackbar>
        </Container>
    );
}
