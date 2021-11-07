import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';



const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;

    const [showBookingModal, setShowBookingModal] = React.useState(false);
    const handleModalOpen = () => setShowBookingModal(true);
    const handleModalClose = () => setShowBookingModal(false);



    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={2} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleModalOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                showBookingModal={showBookingModal}
                handleModalClose={handleModalClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;