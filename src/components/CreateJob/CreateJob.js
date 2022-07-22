import React, { useState } from 'react';
import axios from 'axios';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CreateJob = () => {

    const [job, setJob] = useState({
        jobTitle: '',
        lastDateOfApply: null,
        postDate: null,
        lastUpdated: null,
        level: '',
        shift: '',
        location: '',
        vacancies: '',
        jobType: '',
        jobDescription: '',
        department: '',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(job);
        await axios.post('https://tf-practical.herokuapp.com/api/job_post/', job, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res.data, 'Job Inserted')
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{
                    display: 'block',
                    mt: 4
                }}>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="title"
                            label="Job Title"
                            name="title"
                            autoComplete="off"
                            onBlur={(e) => setJob({ ...job, jobTitle: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <InputLabel id="lastDateOfApply" sx={{ my: 1 }}>Post Date: </InputLabel>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="postDate"
                            type="date"
                            id="postDate"
                            autoComplete="off"
                            onBlur={(e) => setJob({ ...job, postDate: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="level"
                            type='text'
                            label="Level"
                            name="level"
                            autoComplete="off"
                            onBlur={(e) => setJob({ ...job, level: e.target.value })}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Shift</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Shift"
                                value={job?.shift}
                                onChange={(e) => setJob({ ...job, shift: e.target.value })}
                            >
                                <MenuItem value='day'>Day</MenuItem>
                                <MenuItem value='night'>Night</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="location"
                            label="Location"
                            type="text"
                            id="location"
                            autoComplete="off"
                            onBlur={(e) => setJob({ ...job, location: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="vacancies"
                            label="Vacancies"
                            type="number"
                            id="vacancies"
                            autoComplete="off"
                            onBlur={(e) => setJob({ ...job, vacancies: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
                            <Select
                                labelId="jobType"
                                id="jobType"
                                label="Job Type"
                                value={job?.jobType}
                                onChange={(e) => setJob({ ...job, jobType: e.target.value })}
                            >
                                <MenuItem value='full_time'>Full Time</MenuItem>
                                <MenuItem value='part_time'>Part Time</MenuItem>
                                <MenuItem value='internship'>Internship</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <TextareaAutosize
                            minRows={4}
                            required
                            aria-label="minimum height"
                            placeholder="Job Description"
                            name="jobDescription"
                            p={2}
                            style={{ width: '99%' }}
                            onBlur={(e) => setJob({ ...job, jobDescription: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <InputLabel id="lastDateOfApply" sx={{ my: 1 }}>Last Updated: </InputLabel>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="lastUpdated"
                            type="date"
                            id="lastUpdated"
                            autoComplete="off"
                            onBlur={(e) => setJob({ ...job, lastUpdated: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <InputLabel id="lastDateOfApply" sx={{ my: 1 }}>Last Date of Apply: </InputLabel>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="lastDateOfApply"
                            type="date"
                            id="lastDateOfApply"
                            autoComplete="off"
                            onBlur={(e) => setJob({ ...job, lastDateOfApply: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ margin: 'auto' }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default CreateJob;