// src/components/Footer/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaSoundcloud } from 'react-icons/fa'; // Importando ícone do SoundCloud

// Estilizando o footer
const FooterContainer = styled.footer`
    background-color: rgba(0, 0, 0, 0.8); /* Cor de fundo semi-transparente */
    color: white; /* Cor do texto */
    text-align: center; /* Centraliza o texto */
    padding: 20px; /* Espaçamento interno */
    position: relative; /* Para que fique dentro do fluxo do documento */
    bottom: 0; /* Alinha ao fundo */
    width: 100%; /* Largura total */
    margin-top: 10%; /* Garante que o footer fique abaixo de outros conteúdos */
`;

const SocialIcons = styled.div`
    margin: 10px 0; /* Espaço entre os ícones e o texto */
    
    & > a {
        color: #32CD32; /* Cor verde para os ícones */
        margin: 0 10px; /* Espaçamento entre ícones */
        font-size: 24px; /* Tamanho dos ícones */
        transition: color 0.3s; /* Transição suave para a cor ao passar o mouse */
        
        &:hover {
            color: #98FB98; /* Cor verde mais clara ao passar o mouse */
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; {new Date().getFullYear()} Banda Selenita. Todos os direitos reservados.</p>
            <SocialIcons>
                <a href="https://facebook.com/bandaselenita" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://soundcloud.com/bandaselenita" target="_blank" rel="noopener noreferrer">
                    <FaSoundcloud /> {/* Ícone do SoundCloud */}
                </a>
                <a href="https://instagram.com/bandaselenita/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </SocialIcons>
        </FooterContainer>
    );
};

export default Footer;
