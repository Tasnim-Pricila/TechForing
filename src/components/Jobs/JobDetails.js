import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, CardActionArea, CardContent, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const JobDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const getJobs = async () => {
            await axios.get('https://tf-practical.herokuapp.com/api/job_post', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res.data)
                    const response = res.data;
                    const find = response.find(r => r.id == id);
                    console.log(find);
                    setDetails(find);
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
        getJobs();
    }, [])


    return (
        <div>
            <Card sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                p: 1,
                m: 10
            }}>
                <CardActionArea>
                    <CardContent sx={{ textTransform: 'capitalize' }}>
                        <Typography gutterBottom variant="h4" component="div"
                            sx={{ fontWeight: 700}}>
                            {details.jobTitle}
                        </Typography>
                        <Typography variant="body2" color='text.secondary'>
                            Posted On: {details.postDate}
                        </Typography>
                        <Typography variant="body1" sx={{ pt: 2, pb: 1, fontWeight: 700 }}>
                            Description:
                        </Typography>
                        <Typography variant="body1">
                            {details.jobDescription}
                        </Typography>

                        <Typography variant="body2" my={2}>
                            Job Type: {details.jobType}
                        </Typography>
                        <Typography variant="body2" my={2}>
                            Shift: {details.shift}
                        </Typography>
                        <Typography variant="body2" my={2}>
                            Last Date of Apply: {details.lastDateOfApply}
                        </Typography>


                        <Typography variant="body2" color="text.secondary"
                            sx={{ fontWeight: 700, pb: 2 }}>
                            Vacancies: {details.vacancies}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <IconButton>
                                <LocationOnIcon />
                            </IconButton>
                            <Typography variant="body2" color="text.secondary">
                                {details.location}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Button variant="outlined" onClick={() => navigate(-1)} sx={{
                mx: 'auto', 
                display: 'block',
                backgroundColor: '#182f59',
                color: 'white',
                '&:hover':{
                    backgroundColor: '#182f59',
                    color: 'white',
                    borderColor: 'transparent'
                }
            }}>Back</Button>
        </div>
    );
};

export default JobDetails;