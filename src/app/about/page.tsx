import React from 'react';
import Navbar from '@/app/components/Navbar/Navbar'; // Adjust based on your project structure
import Footer from '@/app/components/Footer/Footer'; // Add your Footer component if you have one
import AboutSection from '@/app/components/AboutSection/AboutSection'; // Add your Footer component if you have one
import GameSlider from '@/app/components/GameSlider/GameSlider';


const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutSection />
      <GameSlider />
      <Footer />
    </>
  );
};

export default AboutPage;