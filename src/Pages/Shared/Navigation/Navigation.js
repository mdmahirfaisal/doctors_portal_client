import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
// import useFirebase from '../../../hooks/useFirebase';
import useAuth from './../../../hooks/useAuth';



const Navigation = () => {
    const { user, logOut } = useAuth();

    const linkStyle = {
        textDecoration: 'none',
        color: 'white',

    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <NavLink to="/home" style={linkStyle}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </NavLink>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <NavLink style={linkStyle} to="/home"><Button color="inherit">Home</Button></NavLink>
                        <NavLink style={linkStyle} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                        <NavLink style={linkStyle} to="/appointment"><Button color="inherit">Appointment</Button></NavLink>
                        {
                            user?.email ?
                                <Button onClick={logOut} color="inherit">Logout </Button>
                                :
                                <NavLink style={linkStyle} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }
                        {user.email && <span style={{ marginTop: "-8px", color: "red" }}>{user.displayName || user.email}</span>}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;