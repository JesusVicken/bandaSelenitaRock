// src/components/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Estilizando o botão de navegação
const NavLink = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    textTransform: 'none',
    margin: '0 10px',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
}));

const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#000' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    BandaSelenita
                </Typography>
                <NavLink component={Link} to="/">
                    Início
                </NavLink>
                <NavLink component={Link} to="/about">
                    Sobre
                </NavLink>
                <NavLink component={Link} to="/discography">
                    Discografia
                </NavLink>
                <NavLink component={Link} to="/tour">
                    Shows
                </NavLink>
                <NavLink component={Link} to="/gallery">
                    Galeria
                </NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
