// src/pages/Home.jsx
import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import StickyPlayerButton from '../StickyPlayerButton/StickyPlayerButton'; // Atualizado para o novo nome

const Home = () => {
    return (
        <div style={{ marginTop: '6.5%', marginLeft: '5%' }}>
            <VideoPlayer />
            {/* Outros componentes da página inicial */}
            <StickyPlayerButton
                link="https://sndo.ffm.to/lr1pv65"
            />
        </div>
    );
};

export default Home;
