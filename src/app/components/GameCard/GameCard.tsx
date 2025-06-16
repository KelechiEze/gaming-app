'use client';

import React from 'react';
import { Star } from 'lucide-react';
import './GameCard.css';

interface Game {
  id: number;
  title: string;
  price: string;
  rating: number;
  image: string;
  badges: string[];
  discount: string | null;
}

interface BroccoliCardProps {
  game: Game;
  index: number;
}

const BroccoliCard = ({ game, index }: BroccoliCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}
        fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="broccoli-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="broccoli-card__image-container">
        <img 
          src={game.image} 
          alt={game.title}
          className="broccoli-card__image"
        />
        
        <div className="broccoli-card__badges">
          {game.discount && (
            <span className="badge discount">{game.discount}</span>
          )}
          {game.badges.map((badge, idx) => (
            <span key={idx} className={`badge ${badge.toLowerCase()}`}>
              {badge}
            </span>
          ))}
        </div>
        
        <div className="broccoli-card__overlay">
          <button className="play-button">
            <span>Play Now</span>
          </button>
        </div>
      </div>
      
      <div className="broccoli-card__content">
        <h3 className="broccoli-card__title">{game.title}</h3>
        
        <div className="broccoli-card__footer">
          <div className="broccoli-card__rating">
            <span className="rating-value">{game.rating}</span>
            <div className="stars">
              {renderStars(game.rating)}
            </div>
          </div>
          
          <div className="broccoli-card__price">
            {game.price}
          </div>
        </div>
      </div>
      
      <div className="broccoli-card__glow"></div>
    </div>
  );
};

export default BroccoliCard;
