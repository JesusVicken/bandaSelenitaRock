// src/components/Loading/Loading.jsx
import styled, { keyframes } from 'styled-components';

// Animação para o movimento
const move = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  30% {
    transform: translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

// Estilos do contêiner de texto
const TextContainer = styled.div`
  position: absolute;
  width: 600px;
  height: 36px;
  left: 50%;
  top: 40%;
  transform: translateX(-50%); // Centralizar horizontalmente
  overflow: visible;
  user-select: none;
  cursor: default;
  display: flex; // Usar flexbox para alinhamento
`;

// Estilos das letras
const Letter = styled.span`
  position: relative; 
  opacity: 0; // Inicialmente invisível
  font-family: 'Roboto', sans-serif; // Fonte atualizada
  color: #060404;
  font-size: 36px; // Aumentar o tamanho da letra
  animation: ${move} 4s linear infinite; // Duração aumentada para suavizar a animação

  // Aplique um atraso de animação para cada letra
  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
  &:nth-child(4) { animation-delay: 0.6s; }
  &:nth-child(5) { animation-delay: 0.8s; }
  &:nth-child(6) { animation-delay: 1s; }
  &:nth-child(7) { animation-delay: 1.2s; }
  &:nth-child(8) { animation-delay: 1.4s; }
  &:nth-child(9) { animation-delay: 1.6s; }
  &:nth-child(10) { animation-delay: 1.8s; }
  &:nth-child(11) { animation-delay: 2s; }
  &:nth-child(12) { animation-delay: 2.2s; }
  &:nth-child(13) { animation-delay: 2.4s; }
  &:nth-child(14) { animation-delay: 2.6s; }
`;

// Estilos da barra de carregamento
const LoadingBarContainer = styled.div`
  width: 600px;
  height: 10px;
  background-color: #ccc; // Cor do fundo da barra
  border-radius: 5px; // Bordas arredondadas
  position: absolute;
  left: 50%;
  top: 50%; // Mova para onde você quer que a barra apareça
  transform: translateX(-50%); // Centralizar horizontalmente
  overflow: hidden; // Ocultar conteúdo que ultrapassar a barra
`;

// Barra de carregamento animada
const LoadingBar = styled.div`
  height: 100%;
  width: 0; // Inicialmente, a largura é 0
  background-color: #ee1b10; // Cor da barra de carregamento
  animation: loading 5s linear infinite; // Animação de carregamento

  @keyframes loading {
    0% { width: 0%; }
    50% { width: 100%; }
    100% { width: 0%; }
  }
`;

// Estilos do contêiner Loading
const LoadingContainer = styled.div`
  position: fixed; // Fica fixo na tela
  top: 0;
  left: 0;
  width: 100vw; // Largura total da viewport
  height: 100vh; // Altura total da viewport
  background-color: white; // Fundo branco
  display: flex; // Usar flexbox para centralizar o conteúdo
  justify-content: center; // Centralizar horizontalmente
  align-items: center; // Centralizar verticalmente
  z-index: 999; // Para garantir que fique acima de outros elementos
`;

// Componente principal
const Loading = () => {
    return (
        <LoadingContainer>
            <TextContainer>
                <Letter>S</Letter>
                <Letter>e</Letter>
                <Letter>l</Letter>
                <Letter>e</Letter>
                <Letter>n</Letter>
                <Letter>i</Letter>
                <Letter>t</Letter>
                <Letter>a</Letter>
                <Letter></Letter>
                <Letter></Letter>
                <Letter>R</Letter>
                <Letter>o</Letter>
                <Letter>c</Letter>
                <Letter>k</Letter>
            </TextContainer>
            <LoadingBarContainer>
                <LoadingBar />
            </LoadingBarContainer>
        </LoadingContainer>
    );
};

export default Loading;
