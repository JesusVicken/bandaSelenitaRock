// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Discography from './components/Discography/Discography';
import Tour from './components/Tour/Tour';
import Gallery from './components/Gallery/Gallery';
import Loading from './components/Loading/Loading';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  const [loading, setLoading] = useState(true); // Estado para controlar o loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Altera para false após 2 segundos
    }, 4000);

    return () => clearTimeout(timer); // Limpa o temporizador ao desmontar
  }, []);

  return (
    <Router>
      <Header />
      {loading ? (
        <Loading /> // Exibe o componente Loading
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

      )}

      <Footer />
    </Router>

  );
};

export default App;
