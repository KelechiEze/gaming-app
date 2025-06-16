import React from 'react';
import { ArrowRight } from 'lucide-react';
import './DiabloCard.css';

const DiabloCard = () => {
  return (
    <div className="diablo-card">
      <div className="diablo-overlay"></div>
      <div className="diablo-content">
        <div className="diablo-label">Hell welcomes all</div>
        <h2 className="diablo-title">Diablo IV</h2>
        <p className="diablo-description">
          Action RPG experience with endless evil to slaughter, countless abilities to master, nightmarish dungeons.
        </p>
        <button className="diablo-button">
          <ArrowRight size={16} />
          To Shop
        </button>
      </div>
      <div className="diablo-badge">DEMOS</div>
    </div>
  );
};

export default DiabloCard;
