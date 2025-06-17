import React from 'react';
import Navbar from '@/app/components/Navbar/Navbar'; // Adjust based on your project structure
import Footer from '@/app/components/Footer/Footer'; // Add your Footer component if you have one
import PromotionalBanner from '@/app/components/PromotionalBanner/PromotionalBanner';
import GameBrowsingUniverse from '@/app/components/GameBrowsingUniverse/GameBrowsingUniverse';


const SalePage = () => {
  return (
    <>
      <Navbar />
      <PromotionalBanner />
      <GameBrowsingUniverse />
      <Footer />
    </>
  );
};

export default SalePage;
