// src/components/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import backgroundHeader from '../../assets/background-header.jpg'; // Importa a imagem de fundo

// Estilizando o botão de navegação
const NavLink = styled(Button)(({ theme }) => ({
    color: '#030000', // Define a cor do texto como preto
    textTransform: 'none',
    fontFamily: "'Lilita One', sans-serif",
    margin: '0 10px',

    '&:hover': {
        backgroundColor: 'rgba(229, 220, 220, 0.2)', // Cor do fundo no hover
    },
}));

// Estilizando o nome da banda
const BrandTypography = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    fontFamily: "'Lilita One', sans-serif",
    fontWeight: 700,
    fontSize: '1.8rem',
    color: '#43b516', // Define a cor do texto como preto
    textShadow: '2px 2px 4px rgba(225, 220, 220, 0.4)', // Sombrinha leve
}));

// Estilizando o AppBar para ter a imagem de fundo
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundImage: `url(${backgroundHeader})`,
    backgroundSize: 'cover', // Ajusta a imagem para cobrir o AppBar
    backgroundPosition: 'center', // Centraliza a imagem
    boxShadow: 'none', // Remove a sombra padrão do AppBar
}));

const Header = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <BrandTypography variant="h6">
                    Banda    Selenita
                </BrandTypography>
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
                    Agenda
                </NavLink>
                <NavLink component={Link} to="/gallery">
                    Galeria
                </NavLink>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
