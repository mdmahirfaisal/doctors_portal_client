import { Container, TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, loading, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData);

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    };

    //// Login with google 
    const handleGoogleLogin = () => {
        signInWithGoogle(location, history, toast);
    };


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 10 }}>
                    <Typography variant="h6">Login</Typography>
                    {!loading && <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }} id="standard-basic" name="email" type="email" onBlur={handleOnChange} label="Your Email" variant="standard" /> <br />

                        <TextField sx={{ width: '75%', m: 1 }} id="standard-password-input" name="password" onBlur={handleOnChange} label="Your Password"
                            type="password"
                            variant="standard" /> <br />
                        <Button type="submit" sx={{ width: '75%', m: 1, mt: 2 }} variant="contained">Login</Button>
                        <NavLink to="/register" style={{ textDecoration: 'none' }}>
                            <Button sx={{ width: '75%', m: 1 }} variant="text">NEW USER? PLEASE REGISTER</Button>
                        </NavLink>
                        {loading && <CircularProgress />}

                        {user?.email && <Alert severity="success" color="success">
                            Login Successfully
                        </Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>
                        }
                    </form>}
                    <p>----------------------------</p>
                    <Button onClick={handleGoogleLogin} sx={{ width: '50%', m: 1 }} variant="contained">GOOGLE SIGN IN </Button>
                    <ToastContainer
                        position="top-center"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />

                </Grid>

                <Grid item xs={12} md={6}>
                    <img stye={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;