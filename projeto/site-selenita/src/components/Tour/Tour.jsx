// src/components/Tour/Tour.jsx
import React from 'react';
import styled from 'styled-components';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote'; // Ícone de evento
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Ícone de localização

// Estilos do contêiner principal
const TourContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: rgba(255, 255, 255, 0.8); // Fundo branco semi-transparente
  border-radius: 10px; // Bordas arredondadas
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); // Sombra para destacar o contêiner
  margin-top: 100px; // Espaço do topo da página
`;

// Estilos do título
const Title = styled.h1`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #100808;
`;

// Componente principal
const Tour = () => {
    // Lista fictícia de shows
    const shows = [
        {
            date: "15 de Outubro, 2024",
            location: "Luziania, Goiás",
        },
        {
            date: "22 de Outubro, 2024",
            location: "São Paulo, SP",
        },
        {
            date: "30 de Outubro, 2024",
            location: "Rio de Janeiro, RJ",
        },
        {
            date: "5 de Novembro, 2024",
            location: "Belo Horizonte, MG",
        },
    ];

    return (
        <Container>
            <TourContainer>
                <Title>Agenda de Shows</Title>
                <List>
                    {shows.map((show, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <EventNoteIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={show.date} secondary={show.location} />
                            <ListItemIcon>
                                <LocationOnIcon color="secondary" />
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </TourContainer>
        </Container>
    );
};

export default Tour;
