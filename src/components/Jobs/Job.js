import { Card, CardActionArea, CardContent, Grid, Typography, Box, Button, IconButton } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import Api from '../../axios/Api';
import { toast } from 'react-toastify';

const Job = ({ job, setJobs, jobs, loading, setLoading }) => {

    const navigate = useNavigate();
    const { id, jobTitle, vacancies, jobType, shift, location } = job;

    const handleDetails = (id) => {
        navigate(`/jobs/${id}`)
    }
    const handleRemove = async (id) => {
        setLoading(true);
        await Api.delete(`/job_update/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res.config, 'Successful');
                const remainingJobs = jobs.filter(job => job.id !== id);
                setJobs(remainingJobs);
                toast.success('Job Deleted Successfully ', {
                    theme: 'colored',
                });
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message)
                toast.error( err.message, {
                    theme: 'colored',
                });
                setLoading(false);
            })
    }
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', p: 1 }}>
                <CardActionArea>
                    <CardContent sx={{ textTransform: 'capitalize' }}>
                        <Typography gutterBottom variant="h5" component="div"
                            sx={{ fontWeight: 700 }}>
                            {jobTitle}
                        </Typography>
                        
                        <Box sx={{
                            display: 'flex',
                            gap: 10,
                            py: 2,
                            textTransform: 'uppercase'
                        }}>
                            <Typography variant="body2" color="text.secondary">
                                {jobType}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {shift}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary"
                            sx={{ fontWeight: 700, pb: 2 }}>
                            Vacancies: {vacancies}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <IconButton>
                                <LocationOnIcon />
                            </IconButton>
                            <Typography variant="body2" color="text.secondary">
                                {location}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Button variant="contained" onClick={() => handleDetails(id)}
                                sx={{
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#182f59',
                                        color: 'white',
                                        borderColor: 'transparent'
                                    }
                                }}>View Details
                            </Button>
                            <Button variant="outlined" startIcon={<DeleteIcon />} 
                            onClick={() => handleRemove(id)}
                            sx={{
                                borderColor: '#182f59',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }} >
                                Remove
                            </Button>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Job;