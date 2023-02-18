import * as React from 'react';
import {
  FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinIcon,
    LinkedinShareButton,
    EmailIcon,
    EmailShareButton,
    TwitterIcon,
    TwitterShareButton,
    TelegramIcon,
    TelegramShareButton
} from 'next-share';
import config from "../seo/config";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ShareIcon from '@mui/icons-material/Share';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 325,
    height: 125,
    bgcolor: 'background.paper',
    border: '2px solid #252525',
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
        <div>
            <Modal
                open={ props.open }
                onClose={props.onClose}
                aria-labelledby="thm-share-modal"
                aria-describedby="thm-share-modal"
            >
                <Box sx={style}>
                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px"}}>
                        <ShareIcon sx={{ fontSize: "1.2rem", mr: "10px", color: "#a0d7d9" }} />
                        <Typography variant='h6' sx={{
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}>SHARE</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "10px", width: "100%"}}>
                        <FacebookShareButton url={url} quote={title} hashtag={'#thm'}>
                            <FacebookIcon size={32} round/>
                        </FacebookShareButton>
                        <WhatsappShareButton url={url} quote={title} separator=":: ">
                            <WhatsappIcon size={32} round/>
                        </WhatsappShareButton>
                        <LinkedinShareButton url={url}>
                            <LinkedinIcon size={32} round/>
                        </LinkedinShareButton>
                        <EmailShareButton url={url} subject={title}>
                            <EmailIcon size={32} round/>
                        </EmailShareButton>
                        <TwitterShareButton url={url} quote={title}>
                            <TwitterIcon size={32} round/>
                        </TwitterShareButton>
                        <TelegramShareButton url={url} quote={title}>
                            <TelegramIcon size={32} round/>
                        </TelegramShareButton>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
