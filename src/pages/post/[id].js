import Head from 'next/head';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import config from "../../seo/config";

// components import
import Header from "../../components/header";
import LoadingContentSpinner from "../../components/loadingContentSpinner";
import ArticleHero from "../../components/articleHero";
import ArticleSideMenu from '../../components/articleSideMenu';

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

    // Schema Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": dataFromSsr[0].title,
      "image": [
        dataFromSsr[0].image
       ],
      "datePublished": dataFromSsr[0].date_added,
      "dateModified": dataFromSsr[0].date_added,
      "author": [{
          "@type": "Person",
          "name": "THM",
          "url": "https://thehonestmachine.com/about"
        }]
    }
    
    return (
        <>
            <Head>
                <title>{`THM - ${dataFromSsr[0].title}`}</title>
                <meta name="description" content={dataFromSsr[0].description} />
                <meta name="keywords" content={dataFromSsr[0].keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta charSet="UTF-8"></meta>
                <link rel="canonical" href={config.seoConfig.host+ "/post" + "/" + dataFromSsr[0]._id}></link>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="article"/>
                <meta property="og:url" content={`${config.seoConfig.host}` + "/post" + `/${dataFromSsr[0]._id}`}/>
                <meta property="og:title" content={`${dataFromSsr[0].title}`}/>
                <meta property="og:description" content={`${dataFromSsr[0].description}`}/>
                <meta property="og:image" content={`${dataFromSsr[0].image}`}/>
                <meta property="og:image:secure_url" content={`${dataFromSsr[0].image}`}/>

                {/* <!-- Twitter --/> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={`${config.seoConfig.host}` + "/post" + `/${dataFromSsr[0]._id}`}/>
                <meta property="twitter:title" content={`${dataFromSsr[0].title}`}/>
                <meta property="twitter:description" content={`${dataFromSsr[0].description}`}/>
                <meta property="twitter:image" content={`${dataFromSsr[0].image}`} />
                
                <meta property="og:image:width" content="512" />
                <meta property="og:image:height" content="512" />
                <meta property="og:image:alt" content={`Image For - ${dataFromSsr[0].title}`} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
            <Header></Header>
            {dataFromSsr && dataFromSsr.length > 0 ? 
                <Container maxWidth="xl" style={{ 'paddingTop': "20px" }}>
                    <Grid container >
                        <ArticleHero image={dataFromSsr[0].image} title={dataFromSsr[0].title} date={ dataFromSsr[0].date_added} author={ dataFromSsr[0].author} articleId={dataFromSsr[0]._id}  />
                    </Grid>
                    <Grid container sx={{ marginTop: "20px" }}>
                        <Grid item xs={12} md={9} sx={{padding: "20px"}}>
                            <div style={{textAlign: "justify", fontFamily: "Helvetica", textJustify: "inter-word", fontSize: "22px", lineHeight: "1.5"}} className="article-main-content" dangerouslySetInnerHTML={createMarkup()}/>
                        </Grid>
                        <Grid item xs={12} md={3} sx={{padding: "20px"}}>
                            <ArticleSideMenu tags={dataFromSsr[0].keywords} viewCount={dataFromSsr[0].num_of_views}></ArticleSideMenu>
                        </Grid>
                    </Grid>
                </Container> :
                <LoadingContentSpinner/>
            }
            {/* ,"Helvetica","Arial","sans-serif" */}
        </>
    )
}


export default SingleBlog;