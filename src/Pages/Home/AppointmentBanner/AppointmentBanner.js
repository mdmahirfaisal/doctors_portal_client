import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={doctor} alt="doctorImage" style={{ height: '400px', marginTop: '-110px', marginBottom: '-4px' }} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                        <Box>
                            <Typography sx={{ mb: 5 }} variant="h6" style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>
                            <Typography variant="h4" style={{ color: 'white' }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography sx={{ my: 5 }} style={{ color: 'white', fontSize: '14', fontWeight: '300' }}>
                                The VA approach is clearly not sufficient for many veterans. The suggestion of tying restrictions to patients with
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;