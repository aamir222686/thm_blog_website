import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const CountView = styled(Paper)(({ theme }) => ({
  backgroundColor: '#a0d7d9',
  padding: theme.spacing(1),
    color: "black",
    fontFamily: "monospace",
}));

function ArticleSideMenu({ tags, viewCount }) {
    let listTags = tags.replace(/\s/g, "").split(",");

    return (
        <Grid item xs={12} md={12} sx={{
                backgroundColor: "#272727",
                borderRadius: "10px",
                padding: "20px"
        }}>
            <Grid maxWidth="100%" >
                <Typography variant="h5" color="text.primary">Tags</Typography>
                <Divider></Divider>
                <Grid sx={{display: "flex", flexWrap: "wrap", marginTop: "20px", marginBottom: "20px"}}>
                {listTags.length > 0 ? <>
                    {listTags.map((item, i) => {
                        return <Grid sx={{display: "flex", backgroundColor: "#1A2027", width: "fit-content", margin:"5px", padding: "10px", color: "#a0d7d9", fontFamily: "monospace", cursor: "pointer"}} key={i}>{"#"}{item.toLowerCase()}</Grid>
                    })}
                </>: <Grid sx={{display: "flex", flexWrap: "wrap", marginTop: "20px", marginBottom: "20px"}}>No Tags</Grid>}
                </Grid>
            </Grid>
            <Divider></Divider>
            <Stack marginTop={5}>
                <CountView>
                    <b>Article Views: {viewCount}</b>
                </CountView>
            </Stack>
        </Grid>
    )
}

export default ArticleSideMenu;