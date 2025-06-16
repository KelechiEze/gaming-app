// src/app/page.tsx

import Layout from "./components/Layout/Layout";
import GameShowcase from './components/GameShowcase/GameShowcase';
import GamesShowcase from './components/GamesShowcase/GamesShowcase';
import PromoSection from './components/PromoSection/PromoSection';
import Footer from './components/Footer/Footer';



export default function HomePage() {
  return (
    <>
      <Layout />
      <GameShowcase />
      <GamesShowcase />
      <PromoSection />
      <Footer />
    </>
  );
}
