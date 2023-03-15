import Head from 'next/head';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import config from "../seo/config";
import SingleCard from '@/components/singleCard';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';

// components import
import Header from "../components/header";
import LoadingContentSpinner from "../components/loadingContentSpinner";

export async function getServerSideProps(context) {
    const { category } = context.query;
    let blogData = []
    const res = await fetch(`https://thm-backend-server.fly.dev/getPostsByCategory?category=${category}`)
    if (res.status == 200) {
        let data = await res.json()
        blogData = data;
    } else {
        console.log("ERROR")
    }
    return { props: {blogData}}
}

const CategoryPage = (props) => { 
    let posts = props.blogData;
    const currentRoute = useRouter()
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    return (
        <>
        <Head>
            <title>The Honest Machine</title>
            <meta name="description" content={`${config.seoConfig.description}`} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
            <meta name="keywords" content={config.seoConfig.keywords} />
            <meta charSet="UTF-8"></meta>
            <link rel="canonical" href={config.seoConfig.host}></link>
            <meta name="robots" content="index, follow"></meta>
            <meta property="og:image:alt" content="The Honest Machine Logo"/>
            <meta property="og:site_name" content="The Honest Machine" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`${config.seoConfig.host}` + `${currentRoute.pathname}`}/>
            <meta property="og:title" content={`${config.seoConfig.title}`}/>
            <meta property="og:description" content={`${config.seoConfig.description}`}/>
            <meta property="og:image" content={`${config.seoConfig.mainBlogLogo}`}/>

            {/* <!-- Twitter --/> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={`${config.seoConfig.host}` + `${currentRoute.pathname}`}/>
            <meta property="twitter:title" content={`${config.seoConfig.title}`}/>
            <meta property="twitter:description" content={`${config.seoConfig.description}`}/>
            <meta property="twitter:image" content={`${config.seoConfig.mainBlogLogo}`} />
            
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" />
        </Head>
        <Header></Header>
            <Box sx={{ minHeight: "100px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center", background: "linear-gradient(90deg, rgba(56,0,134,1) 0%, rgba(56,0,139,1) 54%, rgba(26,0,81,1) 100%)" }}>
                <Container maxWidth="xl">
                    <Typography variant="body1" sx={{fontWeight: "100"}} >All Posts Tagged : </Typography>
                    <Typography variant="h4" sx={{fontWeight: "600", fontFamily: "Anton, sans-serif", letterSpacing: "5px", textShadow: "7px 7px 2px #5200ff"}}>{ posts[0].category.toUpperCase()}</Typography>
                </Container>
                </Box>
            <Container maxWidth="xl">
                {!loading ? <>
                    {error.length < 1 ?
                    <Grid container spacing={2}>
                    {
                        posts.map((post, i) => {
                        return <Grid key={i} item xs={12} md={4}><SingleCard clicked={(e) => setLoading(e)} post={post}></SingleCard></Grid>
                        })
                    } 
                    </Grid> : error}
                    </>: <LoadingContentSpinner/>}
        </Container>
    </>
    )
}


export default CategoryPage;