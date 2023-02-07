import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/public-sans';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={darkTheme}><Component {...pageProps} /></ThemeProvider>
}
