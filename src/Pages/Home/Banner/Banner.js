import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, Box } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,

};
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography sx={{ my: 3, fontSize: 15, color: 'gray', fontWeight: 300 }}>
                            The VA health system is unique, using a closed system of providers and a centralized coverage, drug acquisition and distribution system. Because the VA directly purchases
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get AppointMent</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={chair} style={{ width: '350px' }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;