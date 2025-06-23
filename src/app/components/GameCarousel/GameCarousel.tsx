'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './GameCarousel.css';

interface GameSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const gameSlides: GameSlide[] = [
  {
    id: 1,
    title: "THE COMIC KILLER",
    description: "Arcu dictum varius duis at consectetur lorem donec. Vel pretium lectus quam id leo. Varius duis at consectetur lorem donec.",
    imageUrl: "/comic.jpg",
    altText: "The Comic Killer Game"
  },
  {
    id: 2,
    title: "SHADOW REALM",
    description: "Immerse yourself in a dark fantasy world where shadows come alive. Battle ancient evils and discover hidden mysteries.",
    imageUrl: "/bat.jpg",
    altText: "Shadow Realm Game"
  },
  {
    id: 3,
    title: "CYBER NEXUS",
    description: "Navigate through a futuristic cyberpunk cityscape. Hack, fight, and survive in this high-tech adventure.",
    imageUrl: "/survival.jpg",
    altText: "Cyber Nexus Game"
  },
  {
    id: 4,
    title: "MYSTIC WARRIORS",
    description: "Embark on an epic quest with magical powers and ancient weapons. Defeat legendary beasts and save the realm.",
    imageUrl: "/monster.jpg",
    altText: "Mystic Warriors Game"
  },
  {
    id: 5,
    title: "SPACE ODYSSEY",
    description: "Explore distant galaxies and unknown planets. Command your starship in this epic space exploration adventure.",
    imageUrl: "/thunderdrama.jpg",
    altText: "Space Odyssey Game"
  },
  {
    id: 6,
    title: "BATTLE ARENA",
    description: "Test your skills in intense multiplayer battles. Customize your fighter and dominate the competition.",
    imageUrl: "/racing.jpg",
    altText: "Battle Arena Game"
  }
];

const GameCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showRainbow, setShowRainbow] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % gameSlides.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + gameSlides.length) % gameSlides.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleImageHover = () => {
    setShowRainbow(true);
    setTimeout(() => setShowRainbow(false), 4000);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentGame = gameSlides[currentSlide];

  return (
    <div className="banana-hammock">
      <div className="pancake-stack">
        <div className="unicorn-horn">
          <div className="glitter-bomb">
            <span className="sparkle-dot"></span>
            <span className="disco-text">TECHNICALLY STABILIZED</span>
            <span className="sparkle-dot"></span>
          </div>
          <h1 className="rainbow-spew">HIGH-RESOLUTION GAMES</h1>
        </div>

        <div className="taco-wrapper">
          <button 
            className="nacho-arrow nacho-left"
            onClick={prevSlide}
            aria-label="Previous game"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="burrito-container">
            <div 
              className={`pizza-slice ${isAnimating ? 'flipping' : ''} ${showRainbow ? 'unicorn-vomit' : ''}`}
              onMouseEnter={handleImageHover}
            >
              <img 
                src={currentGame.imageUrl} 
                alt={currentGame.altText}
                className="hot-dog-image"
              />
              <div className="skittle-overlay"></div>
            </div>

            <div className={`text-bubble ${isAnimating ? 'jumping' : ''}`}>
              <button className="more-cowbell">VIEW MORE</button>
              <h2 className="game-scream">{currentGame.title}</h2>
              <p className="game-whisper">{currentGame.description}</p>
            </div>
          </div>

          <button 
            className="nacho-arrow nacho-right"
            onClick={nextSlide}
            aria-label="Next game"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="dot-party">
          {gameSlides.map((_, index) => (
            <button
              key={index}
              className={`party-dot ${index === currentSlide ? 'dancing' : ''}`}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsAnimating(false), 300);
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCarousel;