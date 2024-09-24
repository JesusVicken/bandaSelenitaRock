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
  border: 1px solid #ee1b10; // Borda vermelha
  border-radius: 8px; // Bordas arredondadas
  background-color: rgba(255, 255, 255, 0.9); // Fundo semi-transparente
`;

// Estilos do subtítulo
const AlbumTitle = styled.h2`
  font-size: 1.8em;
  margin: 0;
`;

// Estilos da descrição
const AlbumDescription = styled.p`
  margin: 5px 0;
  line-height: 1.4;
`;

const Discography = () => {
    // Lista fictícia de álbuns
    const albums = [
        {
            title: "Caminhos da Luz",
            year: 2016,
            description: "O álbum de estreia da Banda Luziana que traz uma mistura de sons do sertanejo e rock, com letras que falam sobre a vida no campo."
        },
        {
            title: "Reflexos do Coração",
            year: 2018,
            description: "Um álbum mais maduro, explorando temas de amor e relacionamentos, com arranjos sofisticados e uma sonoridade envolvente."
        },
        {
            title: "Ritmos da Terra",
            year: 2020,
            description: "Um trabalho que celebra as raízes culturais do Brasil, incorporando ritmos tradicionais e contemporâneos."
        },
        {
            title: "Viagem Sonora",
            year: 2022,
            description: "Um álbum conceitual que leva os ouvintes a uma jornada musical através de diferentes emoções e paisagens sonoras."
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
