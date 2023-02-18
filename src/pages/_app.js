import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/public-sans';
import { GoogleAnalytics } from "nextjs-google-analytics";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function App({ Component, pageProps }) {
  return <>
    <GoogleAnalytics trackPageViews />
    <ThemeProvider theme={darkTheme}><Component {...pageProps} /></ThemeProvider>
  </>
}
