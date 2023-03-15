import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HomePageHero from "../components/homePageHero";
import { Box } from '@mui/material';

function TopArticlesView({ posts }) {

    posts.sort((a,b) => {return b.num_of_views - a.num_of_views })

    return (
        <>   
        { posts && posts.length > 0 ?
            <Box sx={{ backgroundColor: "#000000",
                    opacity: 1,
                    backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0, #000000 10px ), repeating-linear-gradient( #120038, #120038 )"
                }}
                >
                <Container maxWidth="xl" sx={{padding: "20px"}}>
                        <Typography variant='h3' sx={{
                            fontFamily: "Anton, sans-serif",
                            letterSpacing: "5px",
                            textShadow: "7px 7px 2px #5200ff",
                            position: "relative",
                            top: "20px"
                        }}>Featured Article</Typography>
                        <HomePageHero image={posts[0].image} title={posts[0].title} date={ posts[0].date_added} author={ posts[0].author} articleId={posts[0]._id} description={posts[0].description}/>
                </Container>
            </Box> : null}
    </>
    )
}

export default TopArticlesView;