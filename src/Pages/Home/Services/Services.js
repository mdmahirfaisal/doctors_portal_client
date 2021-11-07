import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        description: 'Some members of Congress are considering a government “negotiation” plan that would tie medicine prices in Medicare to those in the U.S. Department of Veterans',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Affairs (VA). This misguided approach is just the latest in a series of government price-setting proposals that threaten patients’ access to medicines and future innovation.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'The VA employs a narrow, exclusionary formulary to generate savings, and comparisons of coverage between the VA and Medicare demonstrate that the VA offers fewer',
        img: whitening
    }
];

const Services = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: '500', color: 'success.main', m: 1 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: '600', m: 4 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        servicesData.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>

    );
};

export default Services;