import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import Header from "../../components/header";
import config from "../../seo/config"

export default function About() {

  return (
    <>
      <Head>
        <title>THM - About</title>
        <meta name="description" content="The Honest Machine - About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta charset="UTF-8"></meta>
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <InfoIcon color="primary" sx={{marginRight: 1, fontSize: 40}}/>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant="h4" sx={{marginBottom: 2}}>
              About The Honest Machine
            </Typography>
            <Typography variant="body1" sx={{marginBottom: 2}} >
              The Honest Machine is a technology blog that provides honest and insightful articles about trending technologies. Our mission is to keep you informed and up-to-date with the latest news, gadget reviews, software updates, and more.
            </Typography>
            <Typography variant="body1" sx={{marginBottom: 2}} >
              Our team of experienced writers and tech enthusiasts are dedicated to bringing you the most accurate and relevant information, and we strive to present our content in an accessible and engaging way.
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