import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../../axios/Api';
import { toast } from 'react-toastify';
import Loading from '../LoadingButton/Loading';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await Api.post('/login/', user)
            .then(res => {
                const accessToken = res.data.access;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
                setLoading(false);
            })
            .catch(err => {
                toast.error( err.response.data.detail, {
                    theme: 'colored',
                });
                setLoading(false);
            })
        e.target.reset();
    }

    useEffect( () => {
        if(token){
            setLoading(false);
            toast.success('Login Successful ', {
                theme: 'colored',
            });
            navigate('/');
        }
    },[token])
    
    return loading ? ( <Loading/> ) : (
        <div>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                mt: 2
            }}>Login</Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{
                    display: 'block',
                    mt: 4
                }}>
                    <Grid item xs={11} md={6} sx={{ margin: 'auto' }}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="off"
                            onBlur={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={11} md={6} sx={{ margin: 'auto' }}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="off"
                            onBlur={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={11} md={6} sx={{ margin: 'auto' }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Login
                        </Button>
                    </Grid>

                    <Grid item xs={11} md={6} sx={{ margin: 'auto' }}>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            <Typography> New to TechForing? </Typography>
                            <Link to="/register" variant="body2"
                                style={{
                                    color: 'blue',
                                    paddingLeft: 2,
                                    textDecoration: 'none'
                                }}>
                                Register Now
                            </Link>
                        </Box>

                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Login;