import React, { useState } from 'react';
import Header from './components/Header.jsx';
import InfoSection from './components/InfoSection.jsx';
import CentralImage from './components/CentralImage.jsx';
import Footer from './components/Footer.jsx';
import LoginModal from './components/LoginModal.jsx';
import RegisterModal from './components/RegisterModal.jsx';
import './Home.css';

function Home() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <div className="home-container">
      <Header onLogin={() => setOpenLogin(true)} onRegister={() => setOpenRegister(true)} />
      <main className="home-main">
        <InfoSection />
        <CentralImage />
      </main>
      <Footer />
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
      <RegisterModal open={openRegister} onClose={() => setOpenRegister(false)} />
    </div>
  );
}

export default Home;
// ...el resto del código ya está migrado arriba, no se necesita nada aquí
