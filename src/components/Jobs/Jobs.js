import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Job from './Job';
import { Grid } from '@mui/material';


const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            await axios.get('https://tf-practical.herokuapp.com/api/job_post/', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    setJobs(res.data)
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
        getJobs();
    }, [jobs])

    return (
        <div>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                mt: 2,
                px: 6
            }}>
                {
                    jobs.map(job =>
                        <Job
                            key={job.id}
                            job={job}
                            setJobs={setJobs}
                            jobs={jobs}>
                        </Job>)
                }
            </Grid>
        </div >
    );
};

export default Jobs;