import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

const Home = () => {
    return (
        <div>
            <div>
                <Typography variant="h4" component="h4"
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        mt: 4
                    }}
                >
                    BROWSE OPEN POSITIONS BY CATEGORY
                </Typography>
                <Typography variant="h6" component="h6"
                    sx={{
                        textAlign: 'center',
                    }}>
                    We are always on the lookout for talanted people
                </Typography>
            </div>
            <Box sx={{ mt: 4, mx: 10, border: '2px solid gray', borderRadius: 2 }}>
                <Accordion sx={{ backgroundColor: '#E3E3E3' }}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#413C3C'

                        }}>
                            Sales &amp; Marketing
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Manager
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            mt: 2,
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Executive
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>

                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ mt: 2, mx: 10, border: '2px solid gray', borderRadius: 2 }}>
                <Accordion sx={{ backgroundColor: '#E3E3E3' }}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#413C3C'

                        }}>
                            Digital Marketing
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Manager
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            mt: 2,
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Executive
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>

                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ mt: 2, mx: 10, border: '2px solid gray', borderRadius: 2 }}>
                <Accordion sx={{ backgroundColor: '#E3E3E3' }}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#413C3C'

                        }}>
                            Creative
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Manager
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            mt: 2,
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Executive
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>

                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ mt: 2, mx: 10, border: '2px solid gray', borderRadius: 2 }}>
                <Accordion sx={{ backgroundColor: '#E3E3E3' }}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#413C3C'

                        }}>
                            Human Resource
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Manager
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            mt: 2,
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Executive
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>

                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ mt: 2, mx: 10, border: '2px solid gray', borderRadius: 2 }}>
                <Accordion sx={{ backgroundColor: '#E3E3E3' }}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#413C3C'

                        }}>
                            Administration
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Manager
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            mt: 2,
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Executive
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>

                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ mt: 2, mx: 10, border: '2px solid gray', borderRadius: 2 }}>
                <Accordion sx={{ backgroundColor: '#E3E3E3' }}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#413C3C'

                        }}>
                            Development
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Manager
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            mt: 2,
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Executive
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>

                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ mt: 2, mx: 10, border: '2px solid gray', borderRadius: 2 }}>
                <Accordion sx={{ backgroundColor: '#E3E3E3' }}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontWeight: 'bold',
                            color: '#413C3C'

                        }}>
                            Engineering
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Manager
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 4,
                            backgroundColor: 'white',
                            mt: 2,
                            borderRadius: 1
                        }}>
                            <Typography>
                                Sales Executive
                            </Typography>
                            <Button variant="outlined" sx={{
                                color: 'gray',
                                fontWeight: 'bold',
                                borderColor: 'gray',
                                '&:hover': {
                                    backgroundColor: '#182f59',
                                    color: 'white',
                                    borderColor: 'transparent'
                                }
                            }}>Apply Now</Button>
                        </Box>

                    </AccordionDetails>
                </Accordion>
            </Box>
            

        </div>
    );
};

export default Home;