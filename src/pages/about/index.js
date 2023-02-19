import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import Header from "../../components/header";
import config from "../../seo/config";
import Image from 'next/image';
import AboutImage from '../../../public/thm-400.png';

export default function About() {

  return (
    <>
      <Head>
        <title>THM - About</title>
        <meta name="description" content="The Honest Machine - About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta charSet="UTF-8"></meta>
        <link rel="canonical" href={config.seoConfig.host + "/" + "about"}></link>
        <meta property="og:image:alt" content="The Honest Machine Logo"/>
        
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={config.seoConfig.host + "/" + "about"}/>
        <meta property="og:title" content="The Honest Machine - About Page"/>
        <meta property="og:description" content="The Honest Machine - About Page" />
        <meta property="og:image" content={`${config.seoConfig.mainBlogLogo}`}/>

        {/* <!-- Twitter --/> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={config.seoConfig.host + "/" + "about"}/>
        <meta property="twitter:title" content="The Honest Machine - About Page"/>
        <meta property="twitter:description" content="The Honest Machine - About Page"/>
        <meta property="twitter:image" content={`${config.seoConfig.mainBlogLogo}`}/>
      </Head>
      <Header></Header>
      <Container maxWidth="xl" sx={{marginTop: 4, marginBottom: 4}}>
        <Grid container spacing={2} sx={{display: "flex", alignItems: "center"}}>
          <Grid item xs={12} sm={12} md={4}>
            <Image src={AboutImage} width={300} height={300} alt="thm logo"></Image>
          </Grid>
          <Grid item xs={12} sm={12} md={8} padding="20px">
            <Typography variant="h4" sx={{marginBottom: 2}}>
              About The Honest Machine
            </Typography>
            <Typography variant="body1" sx={{marginBottom: 2}} >
              The Honest Machine is a technology blog that provides honest and insightful articles about trending technologies. Our mission is to keep you informed and up-to-date with the latest news, gadget reviews, software updates, and more.
            </Typography>
            <Typography variant="body1" sx={{marginBottom: 2}} >
              Whether you are a seasoned tech veteran or a curious beginner, we welcome you to join our community and explore the exciting world of technology with us.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}