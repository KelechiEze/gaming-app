
'use client';
import React, { useState, useEffect } from 'react';
import { Filter, Gamepad } from 'lucide-react';
import SneakySearchBar from '../SneakySearchBar/SneakySearchBar';
import CheekyFilterSidebar from '../CheekyFilterSidebar/CheekyFilterSidebar';
import EpicGameGrid from '../EpicGameGrid/EpicGameGrid';
import './GameBrowsingUniverse.css';

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

const GameBrowsingUniverse: React.FC = () => {
  const [games] = useState<GameData[]>([
    {
      id: '1',
      name: 'Endling - Extinction is Forever',
      genre: 'Adventure',
      platform: ['PC', 'Nintendo Switch', 'PlayStation 5'],
      price: 18.00,
      discount: 40,
      imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=500&fit=crop',
      popularity: 85
    },
    {
      id: '2',
      name: 'Tyrant\'s Blessing',
      genre: 'RPG',
      platform: ['PC', 'Nintendo Switch'],
      price: 9.99,
      discount: 50,
      imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=500&fit=crop',
      popularity: 78
    },
    {
      id: '3',
      name: 'Tiny Tina\'s Wonderlands',
      genre: 'Action',
      platform: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
      price: 27.00,
      discount: 35,
      imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=500&fit=crop',
      popularity: 92,
      isHot: true
    },
    {
      id: '4',
      name: 'Wreckfest',
      genre: 'Racing',
      platform: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
      price: 11.99,
      discount: 60,
      imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=500&fit=crop',
      popularity: 88,
      isHot: true
    },
    {
      id: '5',
      name: 'RedOut 2',
      genre: 'Racing',
      platform: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
      price: 24.99,
      discount: 21,
      imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=500&fit=crop',
      popularity: 75,
      isHot: true
    },
    {
      id: '6',
      name: 'WRC Generations',
      genre: 'Racing',
      platform: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
      price: 19.99,
      discount: 38,
      imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop',
      popularity: 82,
      isHot: true
    },
    {
      id: '7',
      name: 'Elderand',
      genre: 'Adventure',
      platform: ['PC', 'Nintendo Switch'],
      price: 12.99,
      discount: 28,
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
      popularity: 73
    },
    {
      id: '8',
      name: 'Nomad Survival',
      genre: 'Action',
      platform: ['PC'],
      price: 8.99,
      discount: 22,
      imageUrl: 'https://images.unsplash.com/photo-1614732414444-096a5c7b2c9c?w=400&h=500&fit=crop',
      popularity: 79,
      isHot: true
    },
    // Additional games to reach 30+
    {
      id: '9',
      name: 'Cyber Legends',
      genre: 'Action',
      platform: ['PC', 'PlayStation 5'],
      price: 49.99,
      discount: 25,
      imageUrl: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=500&fit=crop',
      popularity: 94
    },
    {
      id: '10',
      name: 'Medieval Conquest',
      genre: 'RPG',
      platform: ['PC', 'Xbox Series X|S'],
      price: 39.99,
      discount: 15,
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
      popularity: 87
    },
    {
      id: '11',
      name: 'Space Odyssey',
      genre: 'Adventure',
      platform: ['PC', 'Nintendo Switch', 'PlayStation 5'],
      price: 29.99,
      discount: 30,
      imageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=500&fit=crop',
      popularity: 91
    },
    {
      id: '12',
      name: 'Puzzle Master',
      genre: 'Puzzle',
      platform: ['Nintendo Switch', 'PC'],
      price: 14.99,
      discount: 45,
      imageUrl: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=500&fit=crop',
      popularity: 68
    },
    {
      id: '13',
      name: 'Horror Nights',
      genre: 'Horror',
      platform: ['PC', 'PlayStation 5'],
      price: 34.99,
      discount: 20,
      imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=500&fit=crop',
      popularity: 83
    },
    {
      id: '14',
      name: 'Sports Championship',
      genre: 'Sports',
      platform: ['PlayStation 5', 'Xbox Series X|S'],
      price: 59.99,
      discount: 10,
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      popularity: 89
    },
    {
      id: '15',
      name: 'Shooter Elite',
      genre: 'Shooter',
      platform: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
      price: 44.99,
      discount: 35,
      imageUrl: 'https://images.unsplash.com/photo-1542652694-40abf526446e?w=400&h=500&fit=crop',
      popularity: 95
    },
    // Continue with more games...
    {
      id: '16',
      name: 'Fantasy Quest',
      genre: 'RPG',
      platform: ['PC', 'Nintendo Switch'],
      price: 24.99,
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=500&fit=crop',
      popularity: 76
    },
    {
      id: '17',
      name: 'Racing Thunder',
      genre: 'Racing',
      platform: ['PlayStation 5', 'Xbox Series X|S'],
      price: 32.99,
      discount: 18,
      imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop',
      popularity: 84
    },
    {
      id: '18',
      name: 'Adventure Island',
      genre: 'Adventure',
      platform: ['Nintendo Switch', 'PC'],
      price: 19.99,
      discount: 40,
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=500&fit=crop',
      popularity: 71
    },
    {
      id: '19',
      name: 'Action Hero',
      genre: 'Action',
      platform: ['PC', 'PlayStation 5'],
      price: 39.99,
      discount: 25,
      imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=500&fit=crop',
      popularity: 88
    },
    {
      id: '20',
      name: 'Puzzle Paradise',
      genre: 'Puzzle',
      platform: ['Nintendo Switch'],
      price: 12.99,
      discount: 50,
      imageUrl: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=500&fit=crop',
      popularity: 65
    },
    // Additional games to reach 30+
    {
      id: '21',
      name: 'Battle Royale Supreme',
      genre: 'Shooter',
      platform: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
      price: 0, // Free to play
      imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=500&fit=crop',
      popularity: 98,
      isHot: true
    },
    {
      id: '22',
      name: 'Mystic Realms',
      genre: 'RPG',
      platform: ['PC', 'Nintendo Switch', 'PlayStation 5'],
      price: 54.99,
      discount: 12,
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
      popularity: 90
    },
    {
      id: '23',
      name: 'Speed Demons',
      genre: 'Racing',
      platform: ['PC', 'Xbox Series X|S'],
      price: 28.99,
      discount: 33,
      imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=500&fit=crop',
      popularity: 85
    },
    {
      id: '24',
      name: 'Haunted Mansion',
      genre: 'Horror',
      platform: ['PC', 'PlayStation 5'],
      price: 29.99,
      discount: 27,
      imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=500&fit=crop',
      popularity: 79
    },
    {
      id: '25',
      name: 'Olympic Games',
      genre: 'Sports',
      platform: ['PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch'],
      price: 49.99,
      discount: 15,
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      popularity: 86
    },
    {
      id: '26',
      name: 'Mind Bender',
      genre: 'Puzzle',
      platform: ['PC', 'Nintendo Switch'],
      price: 16.99,
      discount: 42,
      imageUrl: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=500&fit=crop',
      popularity: 72
    },
    {
      id: '27',
      name: 'Treasure Hunt',
      genre: 'Adventure',
      platform: ['PC', 'PlayStation 5', 'Nintendo Switch'],
      price: 22.99,
      discount: 38,
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=500&fit=crop',
      popularity: 77
    },
    {
      id: '28',
      name: 'Combat Zone',
      genre: 'Action',
      platform: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
      price: 41.99,
      discount: 28,
      imageUrl: 'https://images.unsplash.com/photo-1542652694-40abf526446e?w=400&h=500&fit=crop',
      popularity: 93
    },
    {
      id: '29',
      name: 'Dragon Quest Legends',
      genre: 'RPG',
      platform: ['PC', 'Nintendo Switch'],
      price: 47.99,
      discount: 20,
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=500&fit=crop',
      popularity: 91
    },
    {
      id: '30',
      name: 'Turbo Racing',
      genre: 'Racing',
      platform: ['PlayStation 5', 'Xbox Series X|S'],
      price: 35.99,
      discount: 24,
      imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop',
      popularity: 81
    }
  ]);

  const [filteredGames, setFilteredGames] = useState<GameData[]>(games);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortBy, setSortBy] = useState('popularity');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const genres = ['Action', 'Adventure', 'Racing', 'RPG', 'Shooter', 'Puzzle', 'Horror', 'Sports'];
  const platforms = ['Nintendo Switch', 'PC', 'PlayStation 5', 'Xbox Series X|S'];

  useEffect(() => {
    const filtered = games.filter(game => {
      const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.genre.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = !selectedGenre || game.genre === selectedGenre;
      const matchesPlatform = selectedPlatforms.length === 0 || 
                             selectedPlatforms.some(platform => game.platform.includes(platform));
      const matchesPrice = game.price >= priceRange.min && game.price <= priceRange.max;
      
      return matchesSearch && matchesGenre && matchesPlatform && matchesPrice;
    });

    // Sort games
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredGames(filtered);
  }, [games, searchTerm, selectedGenre, selectedPlatforms, priceRange, sortBy]);

  return (
    <div className="silly-gaming-universe">
      <div className="bonkers-header-zone">
        <div className="wacky-title-section">
          <h1 className="mega-awesome-title">
            <Gamepad className="funky-gamepad-icon" />
            All Games
          </h1>
          <div className="quirky-results-info">
            Show: 9 / 12 / 18 / 24
            <span className="zany-sort-section">
              Sort by 
              <select 
                className="ridiculous-sort-dropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popularity">popularity</option>
                <option value="price-low">price (low to high)</option>
                <option value="price-high">price (high to low)</option>
                <option value="name">name</option>
              </select>
            </span>
          </div>
        </div>

        <button 
          className="sneaky-mobile-filter-toggle"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        >
          <Filter className="cheeky-filter-icon" />
        </button>
      </div>

      <SneakySearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        genres={genres}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="mad-main-container">
        <CheekyFilterSidebar
          platforms={platforms}
          selectedPlatforms={selectedPlatforms}
          onPlatformChange={setSelectedPlatforms}
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          games={games}
          isOpen={isMobileFiltersOpen}
          onClose={() => setIsMobileFiltersOpen(false)}
        />

        <EpicGameGrid games={filteredGames} />
      </div>
    </div>
  );
};

export default GameBrowsingUniverse;