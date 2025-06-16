'use client';

import Image from 'next/image';
import { Gamepad2 } from 'lucide-react';
import VideoCard from '../VideoCard/VideoCard';
import './PromoSection.css';

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-container">
        {/* Left Side - Character Image */}
        <div className="promo-image-container">
          <Image
            src="/jedi.jpg"
            alt="Jedi warrior standing against the darkness with lightsaber"
            width={600}
            height={800}
            className="promo-character-image"
            priority
          />
          <div className="image-overlay"></div>
        </div>

        {/* Right Side - Content */}
        <div className="promo-content">
          {/* Game Logo */}

          {/* Main Heading */}
          <h2 className="promo-heading">
            Stand Against the Darkness
          </h2>

          {/* Description */}
          <p className="promo-description">
            The story of Cal Kestis continues in STAR WARS Jedi: Survivor™, an epic new 
            adventure that will push Cal further than ever as he fights to protect the 
            galaxy from descending into darkness.
          </p>

          {/* Video Preview Grid */}
          <div className="video-grid">
            <VideoCard 
              thumbnailUrl="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop"
              altText="Gameplay trailer preview"
            />
            <VideoCard 
              thumbnailUrl="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=400&h=225&fit=crop"
              altText="Story trailer preview"
            />
          </div>

          {/* CTA Button */}
          <button className="cta-button1">
            <Gamepad2 size={20} />
            <span>Take It Now!</span>
          </button>

          {/* Footnote */}
          <p className="promo-footnote">
            *Internet connection. Some content may require gameplay to unlock. Mandatory content updates may 
            be downloaded automatically, require additional storage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
