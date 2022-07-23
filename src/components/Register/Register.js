import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../axios/Api';
import { toast } from 'react-toastify';
import Loading from '../LoadingButton/Loading';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        full_name: '',
        birthDate: '',
        email: '',
        phone_number: '',
        gender: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(user);
        await Api.post('/register/', user)
            .then(res => {
                console.log(res.data, 'Registration Successful');
                setLoading(false);
                toast.success('Registration Successful, Login Now ', {
                    theme: 'colored',
                });
            })
            .catch(err => {
                console.log(err)
                toast.error( err.message, {
                    theme: 'colored',
                });
                setLoading(false);
            })
            e.target.reset();
    }

    return loading ? ( <Loading/> ) : (
        <div>
            <Typography variant='h4' sx={{
                textAlign: 'center',
                mt: 2
            }}>Register</Typography>

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
                            id="name"
                            label="Full Name"
                            name="name"
                            autoComplete="off"
                            onBlur={(e) => setUser({ ...user, full_name: e.target.value })}
                        />
                    </Grid>
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
                    <InputLabel id="lastDateOfApply" sx={{ my: 1 }}>Date of Birth: </InputLabel>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="dob"
                            type="date"
                            name="dob"
                            autoComplete="off"
                            onBlur={(e) => setUser({ ...user, birthDate: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={11} md={6} sx={{ margin: 'auto' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Gender"
                                value={user?.gender}
                                onChange={(e) => setUser({ ...user, gender: e.target.value })}
                            >
                                <MenuItem value='Male'>Male</MenuItem>
                                <MenuItem value='Female'>Female</MenuItem>
                                <MenuItem value='Other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={11} md={6} sx={{ margin: 'auto' }}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="phone"
                            label="Phone Number"
                            type="number"
                            id="phone"
                            autoComplete="off"
                            onBlur={(e) => setUser({ ...user, phone_number: e.target.value })}
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
                            helperText="Password must be 8 characters and include both numbers and letters"
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
                            Register Now
                        </Button>
                    </Grid>

                    <Grid item xs={11} md={6} sx={{ margin: 'auto' }}>
                        <Box sx={{
                            display: 'flex',
                            mb: 4
                        }}>
                            <Typography> Already Have an Account? </Typography>
                            <Link to="/login" variant="body2"
                                style={{
                                    color: 'blue',
                                    paddingLeft: 2,
                                    textDecoration: 'none'
                                }}>
                                Login
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};
export default Register;