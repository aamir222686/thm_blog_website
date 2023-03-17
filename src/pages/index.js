import Head from 'next/head'
import Container from '@mui/material/Container';
import Header from "../components/header";
import TopArticlesView from '../components/topArticlesView';
import SingleCard from '@/components/singleCard';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import LoadingContentSpinner from '../components/loadingContentSpinner';
import config from "../seo/config"
import { useRouter } from 'next/router';


export default function Home() {
  const currentRoute = useRouter()
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchPostData = async () => {
      setLoading(true)
      const res = await fetch(`https://thm-backend-server.fly.dev/getPostsByCount?count=${12}`)
      if (res.status == 200) {
        let getMostViewedArr = [];
        const data = await res.json();
        setPosts(data)
        setLoading(false)
      } else {
        setError("Hmmmm...!!! Something went wrong....")
        setLoading(false)
      }
  };
  fetchPostData();
    }, [])

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
      <TopArticlesView posts={posts}></TopArticlesView>
      <Container maxWidth="xl">
        {/* {!loading ? <> */}
           {error.length < 1 ?
          <Grid container spacing={2}>
          {
            posts.map((post, i) => {
              return <Grid key={i} item xs={12} md={4}><SingleCard clicked={(e) => setLoading(e)} post={post}></SingleCard></Grid>
            })
          } 
        </Grid> : error}
        {/* </>: <LoadingContentSpinner/>} */}
      </Container>
    </>
  )
}
