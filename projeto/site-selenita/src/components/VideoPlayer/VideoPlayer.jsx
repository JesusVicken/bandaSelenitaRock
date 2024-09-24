// src/components/VideoPlayer/VideoPlayer.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação de quique
const bounce = keyframes`
  0% {
    transform: translateY(-1000px); // Começa fora da tela
  }
  60% {
    transform: translateY(30px); // Quica para cima
  }
  75% {
    transform: translateY(-10px); // Quica para baixo
  }
  100% {
    transform: translateY(0); // Para na posição final
  }
`;

// Estilo para o contêiner do vídeo
const VideoContainer = styled.div`
  max-width: 800px; // Largura máxima do vídeo
  margin: 50px auto; // Centraliza o vídeo
  border-radius: 10px; // Bordas arredondadas
  overflow: hidden; // Oculta partes do vídeo que saem do contêiner
  animation: ${bounce} 2s ease; // Animação de quique
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
