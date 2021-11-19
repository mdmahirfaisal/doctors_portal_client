import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Appointments = ({ date }) => {
    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `https://polar-oasis-74265.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
            .catch(error => {
                console.log(error);
            })
    }, [date, user.email, token]);



    return (
        <TableContainer component={Paper}>
            <Table sx={{ backgroundColor: '#ffffed' }} aria-label="Appointments table">
                <TableHead>
                    <TableRow>
                        <TableCell>PatientName</TableCell>
                        <TableCell align="left">Service</TableCell>
                        <TableCell align="left">Time</TableCell>
                        <TableCell align="right">Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map(appointment => (
                        <TableRow
                            key={appointment._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {appointment.patientName}
                            </TableCell>
                            <TableCell align="left">{appointment.serviceName}</TableCell>
                            <TableCell align="left">{appointment.time}</TableCell>
                            <TableCell align="right">{appointment.payment ? 'Paid' :
                                <Link to={`/dashboard/payment/${appointment._id}`}><Button variant="text">Pay</Button></Link>
                            }</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Appointments;