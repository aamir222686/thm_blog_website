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
    alignItems: "center"
};

export default function ShareModal(props) {
    const url = `${config.seoConfig.host}/${props.postId}`;
    const title = "THM | " + props.title;


    return (
        <Container>
            <Modal
                open={ props.open }
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
                        <FacebookShareButton url={url} quote={title} hashtag={'#thm'}>
                            <FacebookIcon/>
                        </FacebookShareButton>
                        <WhatsappShareButton url={url} quote={title} separator=":: ">
                            <WhatsAppIcon/>
                        </WhatsappShareButton>
                        <LinkedinShareButton url={url}>
                            <LinkedInIcon/>
                        </LinkedinShareButton>
                        <EmailShareButton url={url} subject={title}>
                            <EmailIcon/>
                        </EmailShareButton>
                        <TwitterShareButton url={url} quote={title}>
                            <TwitterIcon/>
                        </TwitterShareButton>
                        <TelegramShareButton url={url} quote={title}>
                            <TelegramIcon/>
                        </TelegramShareButton>
                    </Box>
                </Box>
            </Modal>
        </Container>
    );
}
