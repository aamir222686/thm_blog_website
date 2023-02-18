import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import headerImage from '../../public/thm-200.png';
import Link from 'next/link';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const pages = ['Blog', 'About'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);

  const handleOpenNavMenu = () => {
    setAnchorElNav(true)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(false)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
                  <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>  
                    <Image style={{marginRight: "10px"}}  src={headerImage} alt="THM Main Logo" width={20}></Image>
                  </Box>
          <Link href={"/"}>
            <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            The Honest Machine
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer anchor="left" open={anchorElNav} onClose={handleCloseNavMenu} onOpen={handleOpenNavMenu}>
              <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', minWidth: "60vw", height: "100%" }}>
                <List>
                  <ListItem>
                    <ListItemButton href='/'>
                      <Image style={{ marginRight: "10px" }} src={headerImage} alt="THM Main Logo" width={20}></Image>
                      <Typography
                        variant="h5"
                        noWrap
                        sx={{
                          mr: 2,
                          display: { xs: 'flex', md: 'none' },
                          flexGrow: 1,
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >
                        THM
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider></Divider>
                <List>
                  <ListItem>
                    <ListItemButton href='/'>
                      <ListItemIcon>
                        <HomeIcon sx={{color: "#a0d7d9"}} />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider></Divider>
                  <List>
                  <ListItem>
                    <ListItemButton href='/about'>
                      <ListItemIcon>
                        <InfoIcon sx={{color: "#a0d7d9"}}/>
                      </ListItemIcon>
                      <ListItemText primary="About" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider></Divider>
              </Box>
            </SwipeableDrawer>
          </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, ml: -4 }}>
                  <Image style={{marginRight: "10px"}}  src={headerImage} alt="THM Main Logo" width={20}></Image>
                </Box>
          
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  marginLeft: "-10px"
                }}
              >
                <Link href={"/"}>THM</Link>
              </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent={'flex-end'}>
            <Link href="/">
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'flex', alignItems: "center", justifyContent: "center", marginRight: "20px" }}>
                <HomeIcon sx={{ marginRight: "5px", "fontSize": "1.2rem", color: "#a0d7d9" }} />
                <Typography sx={{
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem'
                }}>
                  Home
                </Typography>
              </Button>
            </Link>
            <Link href="about">
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', alignItems: "center", justifyContent: "center", marginRight: "20px" }}>
                <InfoIcon sx={{ marginRight: "5px", "fontSize": "1.2rem", color: "#a0d7d9" }} /> 
                <Typography sx={{
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem'
                }}>
                  About
                </Typography>
              </Button>
            </Link>  
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;