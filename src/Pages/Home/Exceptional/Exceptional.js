import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import imgKid from '../../../images/treatment.png';

const Exceptional = () => {


    return (
        <Container sx={{ py: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>

                    <div style={{ backgroundSize: 'cover' }}>
                        <img src={imgKid} style={{ width: "100%", backgroundSize: 'cover' }} alt="" />
                    </div>

                </Grid>


                <Grid item xs={12} md={7}>
                    <Typography variant="h3" component="div" style={{ textAlign: 'start', fontWeight: 500 }}>
                        Exceptional Dental <br /> Care, on Your terms
                    </Typography >

                    <Typography sx={{ textAlign: 'start' }} variant="subtitle">
                        Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral ... Wikipedia

                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Exceptional;