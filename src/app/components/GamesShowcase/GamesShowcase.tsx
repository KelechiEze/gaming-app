
'use client';

import React, { useState } from 'react';
import CategorySidebar from '../CategorySidebar/CategorySidebar';
import GameCard from '../GameCard/GameCard';
import './GamesShowcase.css';

const gameData = {
  Action: [
    {
      id: 1,
      title: "Dead Island 2",
      price: "£53.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      badges: ["HOT", "NEW"],
      discount: null
    },
    {
      id: 2,
      title: "Redfall",
      price: "£69.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: null
    },
    {
      id: 3,
      title: "Returnal",
      price: "£59.99",
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=300&fit=crop",
      badges: [],
      discount: null
    },
    {
      id: 4,
      title: "Crime Boss",
      price: "£33.99",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: "-15%"
    },
    {
      id: 5,
      title: "S.T.A.L.K.E.R. 2",
      price: "£69.99",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop",
      badges: ["HOT", "NEW"],
      discount: null
    }
  ],
  Adventure: [
    {
      id: 6,
      title: "Horizon Zero Dawn",
      price: "£39.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      badges: ["HOT"],
      discount: "-20%"
    },
    {
      id: 7,
      title: "The Witcher 3",
      price: "£29.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: null
    },
    {
      id: 8,
      title: "Assassin's Creed",
      price: "£49.99",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop",
      badges: [],
      discount: null
    },
    {
      id: 9,
      title: "Uncharted 4",
      price: "£24.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      badges: ["HOT"],
      discount: "-30%"
    },
    {
      id: 10,
      title: "Tomb Raider",
      price: "£34.99",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: null
    }
  ],
  Casual: [
    {
      id: 11,
      title: "Stardew Valley",
      price: "£10.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1574270834085-72657b01e60c?w=400&h=300&fit=crop",
      badges: ["HOT"],
      discount: null
    },
    {
      id: 12,
      title: "Animal Crossing",
      price: "£45.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: null
    },
    {
      id: 13,
      title: "Minecraft",
      price: "£19.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1606297842632-e6b25086b6d2?w=400&h=300&fit=crop",
      badges: [],
      discount: "-25%"
    },
    {
      id: 14,
      title: "Fall Guys",
      price: "£15.99",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop",
      badges: ["HOT", "NEW"],
      discount: null
    },
    {
      id: 15,
      title: "Among Us",
      price: "£3.99",
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=400&h=300&fit=crop",
      badges: [],
      discount: null
    }
  ],
  Horror: [
    {
      id: 16,
      title: "Resident Evil 4",
      price: "£39.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1509473007419-0d4c94de0a6e?w=400&h=300&fit=crop",
      badges: ["HOT"],
      discount: null
    },
    {
      id: 17,
      title: "Silent Hill 2",
      price: "£29.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544890225-2f7fea98db0c?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: "-15%"
    },
    {
      id: 18,
      title: "Dead Space",
      price: "£49.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1516975860484-3b1ce6f3a0b0?w=400&h=300&fit=crop",
      badges: [],
      discount: null
    },
    {
      id: 19,
      title: "Outlast",
      price: "£16.99",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      badges: ["HOT"],
      discount: null
    },
    {
      id: 20,
      title: "Phasmophobia",
      price: "£11.99",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: "-20%"
    }
  ],
  Indie: [
    {
      id: 21,
      title: "Hades",
      price: "£19.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      badges: ["HOT"],
      discount: null
    },
    {
      id: 22,
      title: "Celeste",
      price: "£15.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: null
    },
    {
      id: 23,
      title: "Hollow Knight",
      price: "£10.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop",
      badges: [],
      discount: "-30%"
    },
    {
      id: 24,
      title: "Cuphead",
      price: "£17.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop",
      badges: ["HOT"],
      discount: null
    },
    {
      id: 25,
      title: "Ori and the Blind Forest",
      price: "£12.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: "-25%"
    }
  ],
  Racing: [
    {
      id: 26,
      title: "Gran Turismo 7",
      price: "£59.99",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      badges: ["HOT"],
      discount: null
    },
    {
      id: 27,
      title: "Forza Horizon 5",
      price: "£54.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544829728-639d5cae5485?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: "-10%"
    },
    {
      id: 28,
      title: "Need for Speed",
      price: "£39.99",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      badges: [],
      discount: null
    },
    {
      id: 29,
      title: "F1 23",
      price: "£49.99",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=400&h=300&fit=crop",
      badges: ["HOT", "NEW"],
      discount: null
    },
    {
      id: 30,
      title: "Dirt Rally 2.0",
      price: "£24.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      badges: [],
      discount: "-40%"
    }
  ],
  RPG: [
    {
      id: 31,
      title: "Elden Ring",
      price: "£49.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      badges: ["HOT"],
      discount: null
    },
    {
      id: 32,
      title: "Baldur's Gate 3",
      price: "£59.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: null
    },
    {
      id: 33,
      title: "Cyberpunk 2077",
      price: "£29.99",
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      badges: [],
      discount: "-50%"
    },
    {
      id: 34,
      title: "Final Fantasy XVI",
      price: "£54.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop",
      badges: ["HOT", "NEW"],
      discount: null
    },
    {
      id: 35,
      title: "Diablo IV",
      price: "£59.99",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      badges: ["NEW"],
      discount: "-20%"
    }
  ]
};

const categories = Object.keys(gameData);

const GamesShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('Action');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="game-showcase">
      <div className="game-showcase__container">
        <CategorySidebar 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        <div className="game-showcase__games">
          <div className={`games-grid ${isTransitioning ? 'transitioning' : ''}`}>
            {gameData[activeCategory as keyof typeof gameData].map((game, index) => (
              <GameCard key={`${activeCategory}-${game.id}`} game={game} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesShowcase;