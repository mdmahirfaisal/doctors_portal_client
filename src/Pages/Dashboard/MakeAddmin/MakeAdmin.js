import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
        // console.log(email);
    }

    const handleMakeAdmin = (e) => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setAdminSuccess(true);
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <h2>make an admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <TextField type="email" onBlur={handleOnBlur} label="Email" variant="standard" sx={{ width: '50%' }} />  <br />
                <Button sx={{ mt: 2, width: '48%' }} type="submit" variant="contained">Make Admin</Button>

            </form>
            {adminSuccess && <Alert severity="success">Create admin successfully!!</Alert>}
        </div>
    );
};

export default MakeAdmin;