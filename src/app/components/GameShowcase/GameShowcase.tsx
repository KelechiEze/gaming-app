import React from 'react';
import ZeldaCard from '../ZeldaCard/ZeldaCard';
import DiabloCard from '../DiabloCard/DiabloCard';
import './GameShowcase.css';

const GameShowcase = () => {
  return (
    <div className="game-showcase1">
      <div className="game-showcase-container1">
        <ZeldaCard />
        <DiabloCard />
      </div>
    </div>
  );
};

export default GameShowcase;