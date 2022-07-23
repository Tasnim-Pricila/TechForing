import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast } from 'react-toastify';

const Header = () => {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        toast.success('You are Logged Out ', {
            theme: 'colored',
        });
        navigate('/login');

    };

    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl" >
                    <Toolbar>
                        {/* Large screen logo  */}
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '20px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                textTransform: 'uppercase'
                            }}
                        >
                            TechForing
                        </Typography>

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
                                {
                                    !token &&
                                    <div>
                                        <MenuItem>
                                            <NavLink to='/login'
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                Login
                                            </NavLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <NavLink to='/register' style={{
                                                textDecoration: 'none',
                                                color: 'black',
                                                textTransform: 'uppercase',
                                                fontWeight: 'bold',
                                            }}>
                                                Register
                                            </NavLink>
                                        </MenuItem>
                                    </div>
                                }
                                {
                                    token &&
                                    <div>
                                        <MenuItem>
                                            <NavLink to='/jobs' style={{
                                                textDecoration: 'none',
                                                color: 'black',
                                                textTransform: 'uppercase',
                                                fontWeight: 'bold',
                                            }}>
                                                Jobs
                                            </NavLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <NavLink to='/createJob' style={{
                                                textDecoration: 'none',
                                                color: 'black',
                                                textTransform: 'uppercase',
                                                fontWeight: 'bold',
                                            }}
                                            >
                                                Create Job
                                            </NavLink>
                                        </MenuItem>
                                        <MenuItem variant="outlined" endIcon={<LogoutIcon />}
                                        onClick={handleLogout}
                                        sx={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            borderColor: 'black',
                                            backgroundColor: 'white',
                                            '&:hover': {
                                                backgroundColor: '#182f59',
                                                color: 'white',
                                                borderColor: 'transparent'
                                            }
                                        }}>
                                        Logout
                                    </MenuItem>
                                    </div>
                                }
                            </Menu>
                        </Box>

                        {/* Small screen logo  */}
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
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
                                token &&
                                <>
                                    <Button component={NavLink} to='/' sx={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                    }}>
                                        Home
                                    </Button>
                                    <Button component={NavLink} to='/jobs' sx={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                    }}>
                                        Jobs
                                    </Button>
                                    <Button component={NavLink} to='/createJob' sx={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                    }}>
                                        Create Job
                                    </Button>

                                    <Button variant="outlined" endIcon={<LogoutIcon />}
                                        onClick={handleLogout}
                                        sx={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            borderColor: 'black',
                                            backgroundColor: 'white',
                                            '&:hover': {
                                                backgroundColor: '#182f59',
                                                color: 'white',
                                                borderColor: 'transparent'
                                            }
                                        }}>
                                        Logout
                                    </Button>
                                </>
                            }
                            {
                                !token &&
                                <>
                                    <NavLink to='/login' style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                    }}>
                                        Login
                                    </NavLink>
                                    <NavLink to='/register' style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                    }}>

                                        Register
                                    </NavLink>
                                </>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    );
};

export default Header;