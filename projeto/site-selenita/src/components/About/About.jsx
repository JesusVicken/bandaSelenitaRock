// src/components/About/About.jsx
import React from 'react';
import styled from 'styled-components';

// Estilos do contêiner principal
const AboutContainer = styled.div`
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

// Estilos do parágrafo
const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 1.2em;
`;

const About = () => {
    return (
        <AboutContainer>
            <Title>Sobre a Banda</Title>
            <Paragraph>
                A Banda Selene é uma fusão única de estilos que mistura rock, pop e música eletrônica. Formada em 2010, a banda conquistou o coração de muitos fãs com suas letras envolventes e melodias cativantes.
            </Paragraph>
            <Paragraph>
                Com influências de grandes artistas e bandas, como Coldplay, U2 e Daft Punk, a Selene traz uma experiência musical inesquecível a cada apresentação ao vivo. A banda já lançou vários álbuns e singles que alcançaram sucesso nas paradas musicais.
            </Paragraph>
            <Paragraph>
                O compromisso da Banda Selene é criar música que inspire e conecte as pessoas. Estamos sempre em busca de novas sonoridades e experiências que refletem a evolução da nossa jornada musical.
            </Paragraph>
            <Paragraph>
                Junte-se a nós e faça parte dessa incrível aventura musical!
            </Paragraph>
        </AboutContainer>
    );
};

export default About;
