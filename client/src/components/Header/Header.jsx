import React, { useEffect, useState } from 'react'
import { Box, AppBar, IconButton, Typography, Toolbar, Drawer, Divider, Button } from '@mui/material';
import FaRegNewspaper from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import '../styles/HeaderStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../redux/store';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    let isLogin = useSelector(state => state.isLogin);
    isLogin = isLogin || localStorage.getItem("userId");
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("userId") === "652fa657bf357107bece2576") {
            setIsAdmin(true);
        }
    }, [isAdmin])

    // Handle menu click 
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const handleLogout = () => {
        dispatch(authActions.logout());
        localStorage.removeItem("userId")
        localStorage.removeItem("userName")

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
                    <NavLink activeclassName='active' to='/'>Latest</NavLink>
                </li>
                {isLogin &&
                    <>
                        <li>
                            <NavLink to="/trending">Trending</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mostviewed">Most Viewed</NavLink>
                        </li>
                    </>
                }
                {isAdmin &&
                    <li>
                        <NavLink to="/admin/create-news">Create News</NavLink>
                    </li>
                }
                <Divider sx={{ mt: 1 }} />
                {
                    !isLogin &&
                    <>
                        <li>
                            <NavLink to="/signin">Sign In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">Sign Up</NavLink>
                        </li>
                    </>
                }
                {
                    isLogin &&
                    <li>
                        <Link onClick={handleLogout} to={'/signin'}>Logout</Link>
                    </li>
                }
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
                                    <NavLink activeclassName='active' to='/'>Latest</NavLink>
                                </li>
                                {isLogin &&
                                    <>
                                        <li>
                                            <NavLink to="/trending">Trending</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/mostviewed">Most Viewed</NavLink>
                                        </li>
                                    </>
                                }
                                {isAdmin &&
                                    <li>
                                        <NavLink to="/admin/create-news">Create News</NavLink>
                                    </li>
                                }

                                {
                                    !isLogin &&
                                    <>
                                        <li>
                                            <NavLink to="/signin">Sign In</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/signup">Sign Up</NavLink>
                                        </li>
                                    </>
                                }
                                {
                                    isLogin &&
                                    <li>
                                        <Link onClick={handleLogout} to={'/signin'}>Logout</Link>
                                    </li>
                                }
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
