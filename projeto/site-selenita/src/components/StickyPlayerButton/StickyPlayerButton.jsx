// src/components/StickyPlayerButton.jsx
import React from 'react';
import Draggable from 'react-draggable';
import { IconButton } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face'; // Ícone de face

const StickyPlayerButton = ({ link }) => {
    return (
        <Draggable>
            <IconButton
                onDoubleClick={() => window.open(link, '_blank')} // Abre o link em uma nova aba com clique duplo
                aria-label="Play Music"
                style={{ position: 'absolute', zIndex: 1000, color: 'green' }} // Define a cor verde
            >
                <FaceIcon fontSize="large" />
            </IconButton>
        </Draggable>
    );
};

export default StickyPlayerButton;
