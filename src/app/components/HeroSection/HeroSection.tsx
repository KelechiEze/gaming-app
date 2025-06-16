'use client';

import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "DEAD ISLAND 2",
      description: "Explore iconic, gore-drenched Los Angeles and evolve to become the ultimate Zombie Slayer.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: "USD 69.99+"
    },
    {
      id: 2,
      title: "CYBERPUNK 2077",
      description: "Experience the most immersive open-world RPG in the futuristic Night City.",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      price: "USD 59.99+"
    },
    {
      id: 3,
      title: "THE WITCHER 3",
      description: "Embark on an epic adventure in a war-torn world filled with monsters and magic.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      price: "USD 39.99+"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{slides[currentSlide].title}</h1>
            <p className="hero-description">{slides[currentSlide].description}</p>
            
            <div className="platform-buttons">
              <button className="platform-btn">PC</button>
              <button className="platform-btn">XBOX</button>
              <button className="platform-btn">PS5</button>
            </div>
            
            <button className="cta-button">Take It Now!</button>
            <p className="price-text">Starting at {slides[currentSlide].price}</p>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="image-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide-image ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="image-overlay"></div>
              </div>
            ))}
          </div>
          
          <div className="slide-navigation">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
