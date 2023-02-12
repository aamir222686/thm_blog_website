import Head from 'next/head';
import Header from "../components/header";
import LoadingContentSpinner from '../components/LoadingContentSpinner';
import Container from '@mui/material/Container';

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
                    DATA HERE
                </Container> :
                <LoadingContentSpinner/>
            }
            
        </>
    )
}


export default SingleBlog;