import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DoctorInfo from '../DoctorInfo/DoctorInfo';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div>

            <h2>this is doctors: {doctors.length} </h2>
            <Grid container spacing={2}>
                {doctors?.map(doctor => <DoctorInfo
                    key={doctor._id}
                    doctor={doctor}
                ></DoctorInfo>)}
            </Grid>

        </div>
    );
};

export default Doctors;