import React from 'react';
import { Container } from '@mui/system';
import { Button } from '@mui/material';

const Loading = () => {
    return (
        <Container>
            <Button variant="contained"
                sx={{
                    margin: 'auto',
                    mt: 35,
                    mx: 66,
                    fontWeight: 'bold'
                }}
            >
                Loading...
            </Button>
        </Container>
    );
};

export default Loading;