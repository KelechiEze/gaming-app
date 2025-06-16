'use client';

import React from 'react';
import { Star } from 'lucide-react';
import './DiscountedGames.css';

const DiscountedGames = () => {
  const games = [
    {
      id: 1,
      title: "Tiny Tina's Wonderlands",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.5,
      oldPrice: "£59.99",
      newPrice: "£27.00"
    },
    {
      id: 2,
      title: "Little Nightmares II",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.5,
      oldPrice: "£29.99",
      newPrice: "£21.55"
    },
    {
      id: 3,
      title: "Voltaire: The Vegan Vampire",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.5,
      oldPrice: "£24.99",
      newPrice: "£11.10"
    },
    {
      id: 4,
      title: "Red Dead Redemption 2",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5,
      oldPrice: "£59.99",
      newPrice: "£39.99"
    },
    {
      id: 5,
      title: "Hogwarts Legacy",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.5,
      oldPrice: "£69.99",
      newPrice: "£47.95"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={12} className="star filled" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" size={12} className="star half-filled" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={12} className="star empty" />
      );
    }

    return stars;
  };

  return (
    <div className="discounted-games">
      <h2 className="section-title">Discounted Games</h2>
      <div className="games-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-image">
              <img src={game.image} alt={game.title} />
            </div>
            <div className="game-info">
              <h3 className="game-title">{game.title}</h3>
              <div className="game-rating">
                {renderStars(game.rating)}
              </div>
              <div className="game-pricing">
                <span className="old-price">{game.oldPrice}</span>
                <span className="new-price">{game.newPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountedGames;
