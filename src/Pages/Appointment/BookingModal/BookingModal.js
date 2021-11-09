import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';




const BookingModal = ({ showBookingModal, handleModalClose, booking, date, setBookingSuccess }) => {
    const { name, time, } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo)

    }



    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 'auto',
        bgcolor: 'background.paper',
        borderRadius: '30px',
        boxShadow: 50,
        py: 3,
        px: 5,

    };


    const handleBookingSubmit = (e) => {

        // collect data 
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        console.log(appointment)
        // send to the server
        fetch('https://polar-oasis-74265.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleModalClose();
                }
            })
            .catch(error => {
                console.log(error);
            })

        handleModalClose();
        e.preventDefault();
    };


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={showBookingModal}
            onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            style={{ backgroundColor: 'lightgray' }}
            BackdropProps={{
                timeout: 700,
            }}
        >
            <Fade in={showBookingModal}>
                <Box sx={style}>
                    <Typography sx={{ fontWeight: 600, mb: 2, textAlign: 'center' }} id="transition-modal-title" variant="h5" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField style={{ margin: '10px 0' }} disabled fullWidth label="Set time"
                            defaultValue={time}
                            id="fullWidth"
                        />
                        <TextField onClick={handleOnBlur} style={{ margin: '10px 0' }} fullWidth label="Your name"
                            name="patientName"
                            defaultValue={user.displayName}
                            id="fullWidth"
                        />
                        <TextField onClick={handleOnBlur} style={{ margin: '10px 0' }} fullWidth label="Your email"
                            name="email"
                            defaultValue={user.email} id="fullWidth"
                        />
                        <TextField onClick={handleOnBlur} style={{ margin: '10px 0' }} fullWidth label="Phone number"
                            name="phone"
                            id="fullWidth"
                        />
                        <TextField style={{ margin: '10px 0' }} disabled fullWidth label="Set date" defaultValue={date.toDateString()} id="fullWidth"
                        />
                        <Button variant="contained" type="submit">Send</Button>

                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;