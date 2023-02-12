import CircularProgress from '@mui/joy/CircularProgress';
import { CssVarsProvider } from '@mui/joy/styles';
import Grid from '@mui/material/Grid';

function LoadingContentSpinner() {
    return (
        <Grid container style={{ display: "flex", width: "100%", height: "75vh", justifyContent: "center", alignItems: "center" }}>
            <CssVarsProvider>
                <CircularProgress variant="solid" size="md" />
            </CssVarsProvider>
        </Grid>
    )
}

export default LoadingContentSpinner;