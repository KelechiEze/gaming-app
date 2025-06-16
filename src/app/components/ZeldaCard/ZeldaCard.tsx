import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './ZeldaCard.css';

const ZeldaCard = () => {
  return (
    <div className="zelda-card">
      <div className="zelda-overlay"></div>
      <div className="zelda-content">
        <div className="zelda-label">Now available</div>
        <h2 className="zelda-title">
          <span>The Legend of Zelda</span>
          <span>Tears of the Kingdom</span>
        </h2>
        <button className="zelda-button">
          <ShoppingCart size={16} />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ZeldaCard;
