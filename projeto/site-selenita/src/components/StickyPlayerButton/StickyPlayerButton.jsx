// src/components/StickyPlayerButton.jsx
import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { IconButton, Tooltip } from '@mui/material';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined'; // Ícone de player

const StickyPlayerButton = ({ link }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            setStyle(prevStyle => ({
                transform: prevStyle.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)',
                transition: 'transform 0.5s ease'
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Draggable>
            <div style={{ ...style, position: 'absolute', zIndex: 1000 }}>
                <Tooltip title="Clique para escutar as músicas da banda!" arrow>
                    <IconButton
                        onDoubleClick={() => window.open(link, '_blank')} // Abre o link em uma nova aba com clique duplo
                        aria-label="Play Music"
                        style={{ color: 'green' }} // Define a cor verde
                    >
                        <PlayCircleFilledOutlinedIcon fontSize="inherit" style={{ fontSize: '60px' }} /> {/* Aumentando o tamanho do ícone */}
                    </IconButton>
                </Tooltip>
            </div>
        </Draggable>
    );
};

export default StickyPlayerButton;
