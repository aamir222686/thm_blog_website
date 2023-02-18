import Head from 'next/head';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

// components import
import Header from "@/components/header";
import LoadingContentSpinner from '@/components/loadingContentSpinner';
import ArticleHero from "@/components/articleHero";
import ArticleSideMenu from '@/components/articleSideMenu';

export async function getServerSideProps(context) {  
    const { id } = context.query;
    let blogData = []
    const res = await fetch(`https://thm-backend-server.fly.dev/getPostsById?id=${id}`)
    if (res.status == 200) {
        let data = await res.json()
        blogData = data;
    } else {
        console.log("ERROR")
    }
  return { props: {blogData}}
}

const SingleBlog = (props) => { 
    let dataFromSsr = props.blogData;

    function createMarkup() {
        return {__html: dataFromSsr[0].content};
    }
    
    return (
        <>
            <Head>
                <title>THM - {dataFromSsr[0].title}</title>
                <meta name="description" content={dataFromSsr[0].description} />
                <meta name="keywords" content={dataFromSsr[0].keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header></Header>
            {dataFromSsr && dataFromSsr.length > 0 ? 
                <Container maxWidth="xl" style={{ 'padding': "20px" }}>
                    <Grid container >
                        <ArticleHero image={dataFromSsr[0].image} title={dataFromSsr[0].title} date={ dataFromSsr[0].date_added} author={ dataFromSsr[0].author} id={dataFromSsr[0]._id}  />
                    </Grid>
                    <Grid container sx={{ marginTop: "20px" }}>
                        <Grid item xs={12} md={9} sx={{padding: "40px"}}>
                            <div dangerouslySetInnerHTML={createMarkup()}/>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{padding: "40px"}}>
                            <ArticleSideMenu tags={dataFromSsr[0].keywords} viewCount={dataFromSsr[0].num_of_views}></ArticleSideMenu>
                        </Grid>
                    </Grid>
                </Container> :
                <LoadingContentSpinner/>
            }
            
        </>
    )
}


export default SingleBlog;