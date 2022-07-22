import { AppBar, Avatar, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const pages = ['Login', 'Register'];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl" >
                    <Toolbar>
                        {/* Large screen logo  */}
                        <Link to='/'
                            style={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '20px',
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                textTransform: 'uppercase'
                            }}
                        >
                            TechForing
                        </Link>

                        {/* Small screen menu icon  */}
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
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <NavLink to='/login'>Login</NavLink>
                                <NavLink to='/register'>Register</NavLink>
                            </Menu>
                        </Box>

                        {/* Small screen logo  */}
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
                            TechForing
                        </Typography>

                        {/* Menu Item  */}
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            gap: 2,
                            justifyContent: 'end',
                            textDecoration: 'none',
                            color: 'black'
                        }}>
                            {
                                pages.map(page =>
                                    <NavLink to={`/${page}`} style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                    }}>
                                        {page}
                                    </NavLink>
                                )
                            }
                        </Box>

                        {/* Settings  */}
                        {/* <Box sx={{
                            flexGrow: 0,
                            display: 'flex',
                            gap: 2,
                            alignItems: 'center'
                        }}>

                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <MenuItem sx={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <NavLink to='/login'>Login</NavLink>
                                    <NavLink to='/register'>Register</NavLink>
                                </MenuItem>

                            </Menu>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                        </Box> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;