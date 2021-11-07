import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());



    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Calendar
                            date={date}
                            setDate={setDate}
                        ></Calendar>
                    </Grid>

                    <Grid item xs={12} sm={6} md={8}>
                        <Appointments
                            date={date}
                        ></Appointments>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default DashboardHome;