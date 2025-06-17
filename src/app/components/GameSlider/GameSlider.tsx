'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './GameSlider.css';

interface Card {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
  image: string;
}

const GameSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cards: Card[] = [
    {
      id: 1,
      title: "Customers",
      description: "More than 5,000 customers satisfied with our services per year.",
      backgroundColor: "#F59E0B",
      image: "https://img.icons8.com/3d-fluency/94/gift.png"
    },
    {
      id: 2,
      title: "Experience",
      description: "Our company has been working in this field for more than 8 years.",
      backgroundColor: "#EF4444",
      image: "https://img.icons8.com/3d-fluency/94/birthday-cake.png"
    },
    {
      id: 3,
      title: "Safe Payments",
      description: "Make secure payments and settlements, we will protect your funds.",
      backgroundColor: "#10B981",
      image: "https://img.icons8.com/3d-fluency/94/wallet.png"
    },
    {
      id: 4,
      title: "Support",
      description: "Need help or have a wish for our store? Contact our 24/7 support.",
      backgroundColor: "#8B5CF6",
      image: "https://img.icons8.com/3d-fluency/94/headset.png"
    },
    {
      id: 5,
      title: "Fast Delivery",
      description: "Instant access and lightning-fast downloads for your favorite games.",
      backgroundColor: "#F97316",
      image: "https://img.icons8.com/3d-fluency/94/box.png"
    },
    {
      id: 6,
      title: "Verified Games",
      description: "All games are verified, high-quality, and well-reviewed.",
      backgroundColor: "#0EA5E9",
      image: "https://img.icons8.com/3d-fluency/94/verified-account.png"
    },
    {
      id: 7,
      title: "Achievements",
      description: "Track and show off your milestones and leaderboard progress.",
      backgroundColor: "#DC2626",
      image: "https://img.icons8.com/3d-fluency/94/trophy.png"
    }
  ];

  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= cards.length ? 0 : newIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? cards.length - 1 : newIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < cardsPerView; i++) {
      const cardIndex = (currentIndex + i) % cards.length;
      visibleCards.push(cards[cardIndex]);
    }
    return visibleCards;
  };

  return (
    <div className="game-slider">
      <div className="slider-container">
        <button 
          className="nav-button nav-button-left"
          onClick={prevSlide}
          disabled={isAnimating}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="cards-viewport">
          <div 
            className={`cards-container ${isAnimating ? 'animating' : ''}`}
            style={{
              transform: `translateX(0%)`,
              gridTemplateColumns: `repeat(${cardsPerView}, 1fr)`
            }}
          >
            {getVisibleCards().map((card, index) => (
              <div
                key={`${card.id}-${currentIndex}-${index}`}
                className="card"
                style={{ backgroundColor: card.backgroundColor }}
              >
                <div className="card-content">
                  <div className="card-image">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="card-text">
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="nav-button nav-button-right"
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default GameSlider;
