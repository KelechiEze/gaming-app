'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import FooterLinkColumn from '../FooterLinkColumn/FooterLinkColumn';
import './Footer.css';

const Footer = () => {
  const usefulLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Sale', href: '/sale' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faqs' }
  ];

  const gamesLinks = [
    { name: 'PC', href: '/games/pc' },
    { name: 'PlayStation 5', href: '/games/ps5' },
    { name: 'Xbox Series X|S', href: '/games/xbox' },
    { name: 'Nintendo Switch', href: '/games/nintendo' }
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'YouTube', href: '#', icon: Youtube }
  ];

  const paymentMethods = [
    { name: 'PayPal', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
    { name: 'Mastercard', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
    { name: 'Visa', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
    { name: 'Maestro', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Maestro_logo.svg' },
    { name: 'Stripe', src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
    { name: 'Apple Pay', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Google Pay', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg' }
  ];

  return (
    <footer className="footer">
      {/* Top Strip - Payment Methods & Language */}
      <div className="footer-top">
        <div className="payment-section">
          <span className="payment-label">Payment Methods:</span>
          <div className="payment-icons">
            {paymentMethods.map((method,) => (
              <div key={method.name} className="payment-icon">
                <Image
                  src={method.src}
                  alt={method.name}
                  width={40}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="language-selector">
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt="US Flag"
            width={20}
            height={15}
            className="flag-icon"
          />
          <span>United States (English) / USD</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="footer-content">
        {/* Brand Column */}
        <div className="brand-column">
          <div className="logo-section">
            <h2 className="brand-name">Hurecturet.</h2>
          </div>
          <p className="brand-description">
            The online store of equipment and electronics is one of the leading online stores. 
            The band was released in 25 volumes.
          </p>
          <div className="buy-button">
            <span className="lightning-icon">⚡</span>
            Buy WoodMart
          </div>
        </div>

        {/* Useful Links */}
        <FooterLinkColumn title="Useful Links" links={usefulLinks} />

        {/* Games */}
        <FooterLinkColumn title="Games" links={gamesLinks} />

        {/* Social Links */}
        <div className="social-column">
          <h3 className="column-title">Social Links</h3>
          <ul className="social-links">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <li key={social.name} className="social-item">
                  <Link href={social.href} className="social-link">
                    <IconComponent size={16} />
                    <span>{social.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="copyright">
          Based on WoodMart theme 2025 WooCommerce Themes.
        </div>
        
        <div className="bottom-links">
          <Link href="/terms" className="bottom-link">Terms Of Service</Link>
          <Link href="/privacy" className="bottom-link">Privacy Policy</Link>
          <Link href="/refund" className="bottom-link">Store Refund Policy</Link>
        </div>
      </div>

      {/* Demos Button */}
      <div className="demos-button">
        DEMOS
      </div>
    </footer>
  );
};

export default Footer;
