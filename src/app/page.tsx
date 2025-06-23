// src/app/page.tsx

import Layout from "./components/Layout/Layout";
import GameShowcase from './components/GameShowcase/GameShowcase';
import GamesShowcase from './components/GamesShowcase/GamesShowcase';
import PromoSection from './components/PromoSection/PromoSection';
import GameDetailsSection from './components/GameDetailsSection/GameDetailsSection';
import Footer from './components/Footer/Footer';
import GameCarousel from './components/GameCarousel/GameCarousel';



export default function HomePage() {
  return (
    <>
      <Layout />
      <GameShowcase />
      <GamesShowcase />
      <GameDetailsSection />
      <GameCarousel />
      <PromoSection />
      <Footer />
    </>
  );
}
