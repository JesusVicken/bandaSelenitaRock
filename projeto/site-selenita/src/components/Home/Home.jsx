// src/pages/Home.jsx (ou onde estiver seu componente Home)
import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Home = () => {
    return (
        <div style={{ marginTop: '200px' }}> {/* Adiciona margem superior */}
            <VideoPlayer /> {/* Adiciona o componente do vídeo */}
            {/* Outros componentes da página inicial */}
        </div>
    );
};

export default Home;
