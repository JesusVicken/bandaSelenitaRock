// src/components/Gallery/Gallery.jsx
import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

// Estilo para o Paper (Frame)
const StyledPaper = styled(Paper)`
  height: 200px; // Altura dos frames
  background-color: #f5f5f5; // Cor de fundo do frame
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); // Sombra para destacar o contêiner
`;

// Lista fictícia de URLs de imagens do Instagram
const imageUrls = [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200/ff7f7f",
    "https://via.placeholder.com/200/7f7fff",
    "https://via.placeholder.com/200/7fff7f",
    "https://via.placeholder.com/200/ffff7f",
    "https://via.placeholder.com/200/ff7fff",
    "https://via.placeholder.com/200/7f7f7f",
    "https://via.placeholder.com/200/ffffff",
];

// Componente principal
const Gallery = () => {
    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Galeria
            </Typography>
            <Grid container spacing={2}>
                {imageUrls.map((url, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <StyledPaper>
                            <img src={url} alt={`Gallery Image ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                        </StyledPaper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Gallery;
