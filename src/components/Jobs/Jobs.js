import React, { useEffect, useState } from 'react';
import Job from './Job';
import { Grid } from '@mui/material';
import Api from '../../axios/Api';
import Loading from '../LoadingButton/Loading';


const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getJobs = async () => {
            await Api.get('/job_post/', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    setLoading(false)
                    setJobs(res.data);
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
        getJobs();
    }, [jobs])

    return loading ? ( <Loading/> ) : (
        <div>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                mt: 2,
                px:{xs: 2, md: 6}
            }}>
                {
                    jobs.map(job =>
                        <Job
                            key={job.id}
                            job={job}
                            setJobs={setJobs}
                            jobs={jobs}
                            loading={loading}
                            setLoading={setLoading}>
                        </Job>)
                }
            </Grid>
        </div >
    );
};

export default Jobs;