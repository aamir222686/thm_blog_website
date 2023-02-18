import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
    color: "#a0d7d9",
    cursor: "pointer",
  fontFamily: "monospace"
}));

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
            <Stack spacing={3}>
                <Typography variant="h5" color="text.primary">Tags</Typography>
                <Divider></Divider>
                {listTags.length > 0 ? <>
                    {listTags.map((item, i) => {
                        return <Item key={i}>{"#"}{item.toLowerCase()}</Item>
                    })}
                </>: <Item>"No Tags"</Item>}
            </Stack>
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