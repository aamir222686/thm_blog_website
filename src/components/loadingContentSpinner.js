import CircularProgress from '@mui/joy/CircularProgress';
import { CssVarsProvider } from '@mui/joy/styles';
import Grid from '@mui/material/Grid';

function LoadingContentSpinner() {
    return (
        // Grid layout
        <Grid container style={{ display: "flex", width: "100%", height: "75vh", justifyContent: "center", alignItems: "center" }}>
            <CssVarsProvider>
                <CircularProgress variant="solid" size="sm" />
            </CssVarsProvider>
        </Grid>
    )
}

export default LoadingContentSpinner;