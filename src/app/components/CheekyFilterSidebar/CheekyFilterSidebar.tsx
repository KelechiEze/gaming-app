'use client';
import React from 'react';
import { X } from 'lucide-react';
import './CheekyFilterSidebar.css';

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

interface CheekyFilterSidebarProps {
  platforms: string[];
  selectedPlatforms: string[];
  onPlatformChange: (platforms: string[]) => void;
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  priceRange: { min: number; max: number };
  onPriceRangeChange: (range: { min: number; max: number }) => void;
  games: GameData[];
  isOpen: boolean;
  onClose: () => void;
}

const CheekyFilterSidebar: React.FC<CheekyFilterSidebarProps> = ({
  platforms,
  selectedPlatforms,
  onPlatformChange,
  genres,
  selectedGenre,
  onGenreChange,
  priceRange,
  onPriceRangeChange,
  games,
  isOpen,
  onClose
}) => {
  const handlePlatformToggle = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      onPlatformChange(selectedPlatforms.filter(p => p !== platform));
    } else {
      onPlatformChange([...selectedPlatforms, platform]);
    }
  };

  const getPlatformCount = (platform: string) => {
    return games.filter(game => game.platform.includes(platform)).length;
  };

  const getGenreCount = (genre: string) => {
    return games.filter(game => game.genre === genre).length;
  };

  return (
    <>
      <div className={`incredibly-cheeky-sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="wonderfully-wacky-sidebar-header">
          <h3 className="delightfully-daft-filter-title">Filters</h3>
          <button className="silly-close-button" onClick={onClose}>
            <X className="goofy-close-icon" />
          </button>
        </div>

        {/* Price Filter */}
        <div className="absurdly-awesome-filter-section">
          <h4 className="ridiculously-rad-section-title">Price</h4>
          <div className="fantastically-funky-price-controls">
            <div className="brilliantly-bonkers-price-range">
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange.min}
                onChange={(e) => onPriceRangeChange({ ...priceRange, min: Number(e.target.value) })}
                className="magnificently-mad-price-slider"
              />
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange.max}
                onChange={(e) => onPriceRangeChange({ ...priceRange, max: Number(e.target.value) })}
                className="magnificently-mad-price-slider"
              />
            </div>
            <div className="hilariously-hip-price-display">
              Price: £{priceRange.min} – £{priceRange.max}
            </div>
            <button 
              className="spectacularly-silly-filter-button"
              onClick={() => {/* Filter action handled by parent */}}
            >
              Filter
            </button>
          </div>
        </div>

        {/* Platform Filter */}
        <div className="absurdly-awesome-filter-section">
          <h4 className="ridiculously-rad-section-title">Platform</h4>
          <div className="wonderfully-weird-platform-list">
            {platforms.map(platform => (
              <label key={platform} className="fantastically-funky-platform-item">
                <input
                  type="checkbox"
                  checked={selectedPlatforms.includes(platform)}
                  onChange={() => handlePlatformToggle(platform)}
                  className="brilliantly-bonkers-checkbox"
                />
                <span className="delightfully-daft-platform-name">{platform}</span>
                <span className="hilariously-hip-game-count">{getPlatformCount(platform)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Genre Filter */}
        <div className="absurdly-awesome-filter-section">
          <h4 className="ridiculously-rad-section-title">Genre</h4>
          <div className="spectacularly-silly-genre-list">
            <label className="fantastically-funky-genre-item">
              <input
                type="radio"
                name="genre"
                checked={selectedGenre === ''}
                onChange={() => onGenreChange('')}
                className="magnificently-mad-radio"
              />
              <span className="delightfully-daft-genre-name">All Genres</span>
              <span className="hilariously-hip-game-count">{games.length}</span>
            </label>
            {genres.map(genre => (
              <label key={genre} className="fantastically-funky-genre-item">
                <input
                  type="radio"
                  name="genre"
                  checked={selectedGenre === genre}
                  onChange={() => onGenreChange(genre)}
                  className="magnificently-mad-radio"
                />
                <span className="delightfully-daft-genre-name">{genre}</span>
                <span className="hilariously-hip-game-count">{getGenreCount(genre)}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {isOpen && <div className="sneaky-mobile-overlay" onClick={onClose}></div>}
    </>
  );
};

export default CheekyFilterSidebar;
