'use client';

import React, { useState } from 'react';
import { Eye, ShoppingCart } from 'lucide-react';
import './GameDetailsSection.css';

interface GameData {
  id: number;
  title: string;
  match: string;
  year: string;
  tags: { text: string; type: 'adventure' | 'quality' }[];
  description: string;
  backgroundImage: string;
  thumbnail: string;
}

const GameDetailsSection = () => {
  const gameData: GameData[] = [
    {
      id: 1,
      title: "BUDGET",
      match: "98% Match",
      year: "2024",
      tags: [
        { text: "Adventure", type: "adventure" },
        { text: "4K ULTRA HD", type: "quality" }
      ],
      description: "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Facilisis volutpat est velit egestas dui id ornare arcu. Consequat semper viverra nam libero justo laoreet.",
      backgroundImage: "/halo.jpg",
      thumbnail: "/halo.jpg"
    },
    {
      id: 2,
      title: "VELOCITY",
      match: "94% Match",
      year: "2024",
      tags: [
        { text: "Racing", type: "adventure" },
        { text: "8K ULTRA HD", type: "quality" }
      ],
      description: "Experience the ultimate racing adventure with cutting-edge graphics and realistic physics. Feel the adrenaline rush as you navigate through challenging tracks at breakneck speeds.",
      backgroundImage: "/carz.jpg",
      thumbnail: "/carz.jpg"
    },
    {
      id: 3,
      title: "COSMOS",
      match: "96% Match",
      year: "2024",
      tags: [
        { text: "Space", type: "adventure" },
        { text: "HDR GAMING", type: "quality" }
      ],
      description: "Embark on an epic space odyssey across the galaxy. Explore distant planets, engage in stellar combat, and uncover the mysteries of the universe in this immersive space adventure.",
      backgroundImage: "/shooter.jpg",
      thumbnail: "/shooter.jpg"
    }
  ];

  const [selectedGame, setSelectedGame] = useState<GameData>(gameData[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleImageClick = (game: GameData) => {
    if (game.id === selectedGame.id) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setSelectedGame(game);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="gd-container">
      <div 
        className="gd-background-image"
        style={{ backgroundImage: `url(${selectedGame.backgroundImage})` }}
      ></div>
      <div className="gd-background-overlay"></div>
      
      <div className={`gd-content ${isTransitioning ? 'gd-transitioning' : ''}`}>
        <div className="gd-main-content">
          <h1 className="gd-title">{selectedGame.title}</h1>
          
          <div className="gd-meta">
            <div className="gd-match-info">
              <span className="gd-match-badge">{selectedGame.match}</span>
              <span className="gd-year">{selectedGame.year}</span>
            </div>
            <div className="gd-tags">
              {selectedGame.tags.map((tag, index) => (
                <span key={index} className={`gd-tag gd-tag-${tag.type}`}>
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
          
          <p className="gd-description">
            {selectedGame.description}
          </p>
          
          <hr className="gd-divider" />
          
          <div className="gd-actions">
            <button className="gd-btn gd-btn-primary">
              <Eye size={20} />
              VIEW MORE
            </button>
            <button className="gd-btn gd-btn-secondary">
              <ShoppingCart size={20} />
              PURCHASE GAME
            </button>
          </div>
        </div>
        
        <div className="gd-thumbnails">
          {gameData.map((game) => (
            <div 
              key={game.id}
              className={`gd-thumbnail ${selectedGame.id === game.id ? 'gd-active' : ''}`}
              onClick={() => handleImageClick(game)}
            >
              <img src={game.thumbnail} alt={`${game.title} Screenshot`} />
              <div className="gd-thumbnail-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetailsSection;