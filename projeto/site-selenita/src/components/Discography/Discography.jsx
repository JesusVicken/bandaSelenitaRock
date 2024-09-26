// src/components/Discography/Discography.jsx
import React from 'react';
import styled from 'styled-components';

// Estilos do contêiner principal
const DiscographyContainer = styled.div`
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

// Estilos da lista de álbuns
const AlbumList = styled.ul`
  list-style-type: none; // Remove a lista padrão
  padding: 0;
`;

// Estilos de cada item da lista
const AlbumItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #1ec218; // Borda vermelha
  border-radius: 8px; // Bordas arredondadas
  background-color: rgba(255, 255, 255, 0.9); // Fundo semi-transparente
`;

// Estilos do subtítulo
const AlbumTitle = styled.h2`
  font-size: 1.8em;
  margin: 0;
    color: black; // Cor preta para o título e ano

`;

// Estilos da descrição
const AlbumDescription = styled.p`
  margin: 5px 0;
  line-height: 1.4;
`;

const Discography = () => {
  // Lista de álbuns da Banda Selenita
  const albums = [
    {
      title: "Luz da Lua (Single)",
      year: 2024,
      description: "Lançado como um single, 'Luz da Lua' explora novos territórios sonoros com elementos de música eletrônica, mantendo o estilo cósmico característico da banda."
    },
    {
      title: "Selenita ao Vivo - Acústico",
      year: 2023,
      description: "Uma performance acústica intimista gravada ao vivo, apresentando versões minimalistas das faixas mais populares da banda."
    },
    {
      title: "Cosmos e Caos",
      year: 2022,
      description: "O segundo álbum explora temas sobre a dualidade do universo e a jornada humana entre o caos e a ordem. Com um som mais maduro, a banda mistura riffs marcantes com atmosferas experimentais."
    },
    {
      title: "Eclipse Lunar",
      year: 2020,
      description: "O primeiro álbum de estúdio da Banda Selenita, trazendo uma combinação de rock alternativo com influências psicodélicas e atmosferas espaciais."
    },
  ];


  return (
    <DiscographyContainer>
      <Title>Discografia</Title>
      <AlbumList>
        {albums.map((album, index) => (
          <AlbumItem key={index}>
            <AlbumTitle>{album.title} ({album.year})</AlbumTitle>
            <AlbumDescription>{album.description}</AlbumDescription>
          </AlbumItem>
        ))}
      </AlbumList>
    </DiscographyContainer>
  );
};

export default Discography;
