import React, { useState } from 'react'
import { Box, AppBar, IconButton, Typography, Toolbar, Drawer, Divider, Button } from '@mui/material';
import FaRegNewspaper from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import '../styles/HeaderStyle.css'

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Handle menu click 
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    // Menu Drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{ flexGrow: 1, my: 2, fontWeight: "bold" }}>
                <FaRegNewspaper />
                Daily News
            </Typography>
            <Divider />
            <ul className='mobileNav'>
                <li>
                    <Link to="/">Latest</Link>
                </li>
                <li>
                    <Link to="/trending">Trending</Link>
                </li>
                <li>
                    <Link to="/mostviewed">Most Viewed</Link>
                </li>

                <Divider sx={{ mt: 3 }} />

                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </Box>
    )

    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar disableGutters sx={{ p: 0, m: 0 }}>
                        <IconButton onClick={handleDrawerToggle} color='inherit' aria-label='open drawer' edge='start' sx={{ display: { lg: 'none' } }}>
                            <MenuIcon sx={{ ml: 1 }} />
                        </IconButton>
                        <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{ flexGrow: 1, ml: 0, fontWeight: "bold", }}>
                            <FaRegNewspaper />
                            Daily News
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block', p: 0, m: 0 } }}>
                            <ul className='navMenu'>
                                <li>
                                    <NavLink activeclassName='active' to="/">Latest</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/trending">Trending</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/mostviewed">Most Viewed</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/signin">Sign In</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup">Sign Up</NavLink>
                                </li>
                            </ul>
                        </Box>
                        {/* <Box sx={{ bgcolor: "white", fontSize: '1.3rem', fontWeight: "bold", borderRadius: '5px' }}>
                            <Link>
                                <Button sx={{ color: 'black' }}>Cart  </Button>
                            </Link>
                        </Box> */}
                    </Toolbar>
                </AppBar>
                <Box component={'nav'} >
                    <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', lg: 'none' }, "& .MuiDrawer-paper": { boxSizing: 'border-box', width: '240px' } }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    {/* <Toolbar disableGutters /> */}
                </Box>
            </Box>

        </>
    )
}


export default Header;
