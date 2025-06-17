'use client';
import React from 'react';
import { Search } from 'lucide-react';
import './SneakySearchBar.css';

interface SneakySearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  genres: string[];
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const SneakySearchBar: React.FC<SneakySearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  genres
}) => {
  return (
    <div className="super-sneaky-search-container">
      <div className="absolutely-bonkers-search-wrapper">
        <Search className="incredibly-cool-search-icon" />
        <input
          type="text"
          placeholder="Search games by name, genre, or popularity..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="magnificently-crazy-search-input"
        />
      </div>

      <div className="utterly-ridiculous-filter-controls">
        <select
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
          className="hilariously-awesome-genre-select"
        >
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SneakySearchBar;
