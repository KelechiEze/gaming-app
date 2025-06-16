import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import DiscountedGames from '../DiscountedGames/DiscountedGames';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <div className="content-container">
          <div className="hero-area">
            <HeroSection />
          </div>
          <div className="sidebar-area">
            <DiscountedGames />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
