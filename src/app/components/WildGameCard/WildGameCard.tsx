'use client';
import React, { useState } from 'react';
import './WildGameCard.css';

interface GameData {
  id: string;
  name: string;
  genre: string;
  platform: string[];
  price: number;
  discount?: number;
  imageUrl: string;
  popularity: number;
  isHot?: boolean;
}

interface WildGameCardProps {
  game: GameData;
  animationDelay: number;
}

const WildGameCard: React.FC<WildGameCardProps> = ({ game, animationDelay }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const discountedPrice = game.discount 
    ? (game.price * (1 - game.discount / 100)).toFixed(2)
    : game.price.toFixed(2);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div 
      className="outrageously-wild-game-card"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {game.discount && (
        <div className="ridiculously-awesome-discount-badge">
          -{game.discount}%
        </div>
      )}

      {game.isHot && (
        <div className="spectacularly-hot-badge">
          HOT
        </div>
      )}

      <div className="magnificently-crazy-image-container">
        {!imageLoaded && !imageError && (
          <div className="hilariously-loading-placeholder">
            <div className="bouncy-loading-spinner"></div>
          </div>
        )}
        
        {imageError ? (
          <div className="comically-broken-image">
            <div className="silly-broken-icon">🎮</div>
            <span>Image not found</span>
          </div>
        ) : (
          <img
            src={game.imageUrl}
            alt={game.name}
            className={`fantastically-funky-game-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
        
        <div className="wonderfully-wacky-hover-overlay">
          <div className="delightfully-daft-platform-tags">
            {game.platform.slice(0, 2).map(platform => (
              <span key={platform} className="brilliantly-bonkers-platform-tag">
                {platform === 'Nintendo Switch' ? 'Switch' : 
                 platform === 'PlayStation 5' ? 'PS5' : 
                 platform === 'Xbox Series X|S' ? 'Xbox' : platform}
              </span>
            ))}
            {game.platform.length > 2 && (
              <span className="brilliantly-bonkers-platform-tag">
                +{game.platform.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="absolutely-bonkers-card-content">
        <h4 className="incredibly-cool-game-title">{game.name}</h4>
        
        <div className="utterly-ridiculous-genre-tag">
          {game.genre}
        </div>

        <div className="spectacularly-silly-price-section">
          {game.price === 0 ? (
            <span className="magnificently-mad-free-price">FREE</span>
          ) : (
            <>
              {game.discount && (
                <span className="hilariously-hip-old-price">£{game.price.toFixed(2)}</span>
              )}
              <span className="fantastically-funky-current-price">£{discountedPrice}</span>
            </>
          )}
        </div>

        <div className="delightfully-daft-popularity-bar">
          <div className="wonderfully-weird-popularity-label">
            Popularity: {game.popularity}%
          </div>
          <div className="brilliantly-bonkers-popularity-fill">
            <div 
              className="absurdly-awesome-popularity-progress"
              style={{ width: `${game.popularity}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WildGameCard;
