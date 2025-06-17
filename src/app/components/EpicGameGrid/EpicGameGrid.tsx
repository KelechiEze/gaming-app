'use client';
import React from 'react';
import WildGameCard from '../WildGameCard/WildGameCard';
import './EpicGameGrid.css';

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

interface EpicGameGridProps {
  games: GameData[];
}

const EpicGameGrid: React.FC<EpicGameGridProps> = ({ games }) => {
  return (
    <div className="absolutely-mental-game-grid">
      {games.length === 0 ? (
        <div className="hilariously-empty-state">
          <div className="comically-sad-message">
            <h3>No games found! 🎮</h3>
            <p>Try adjusting your filters or search terms</p>
          </div>
        </div>
      ) : (
        games.map((game, index) => (
          <WildGameCard 
            key={game.id} 
            game={game} 
            animationDelay={index * 0.1}
          />
        ))
      )}
    </div>
  );
};

export default EpicGameGrid;
