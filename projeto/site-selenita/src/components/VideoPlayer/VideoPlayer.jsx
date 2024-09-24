// src/components/VideoPlayer/VideoPlayer.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação de entrada
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Estilo para o contêiner do vídeo
const VideoContainer = styled.div`
  max-width: 800px; // Largura máxima do vídeo
  margin: 100px auto; // Aumenta a margem superior para 100px
  border-radius: 10px; // Bordas arredondadas
  overflow: hidden; // Oculta partes do vídeo que saem do contêiner
  animation: ${fadeIn} 0.8s ease-out; // Animação de entrada
`;

// Estilo para o iframe do vídeo
const VideoFrame = styled.iframe`
  width: 100%; // Largura completa do contêiner
  height: 450px; // Altura do vídeo
  border: none; // Remove bordas
`;

const VideoPlayer = () => {
    return (
        <VideoContainer>
            <VideoFrame
                src="https://www.youtube.com/embed/AS6xQiJI3ok?autoplay=1&mute=1" // Adiciona autoplay e mute
                title="Vídeo do YouTube"
                allowFullScreen // Permite tela cheia
            />
        </VideoContainer>
    );
};

export default VideoPlayer;
