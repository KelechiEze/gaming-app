'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Search,
  User,
  ShoppingCart,
  Instagram,
  Youtube,
  Menu,
  X,
  Eye,
  EyeOff
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const gamesDropdownRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        gamesDropdownRef.current &&
        !gamesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsGamesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when sign‑in modal is open
  useEffect(() => {
    if (isSignInOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSignInOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <span className="logo-text">Hurecturet</span>
            <span className="logo-dot"></span>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu desktop-menu">
            <Link href="/" className="nav-link">
              Home
            </Link>

            <div className="nav-dropdown" ref={gamesDropdownRef}>
              <button
                className="nav-link dropdown-trigger"
                onClick={() => setIsGamesDropdownOpen(!isGamesDropdownOpen)}
              >
                Games
                <svg
                  className="dropdown-arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isGamesDropdownOpen && (
                <div className="dropdown-menu-large">
                  <div className="dropdown-sections">
                    <div className="dropdown-section">
                      <h3 className="section-title">
                        <span className="section-icon">🎮</span>
                        All games
                      </h3>
                      <ul className="section-items">
                        <li>
                          <a href="#" className="dropdown-item">
                            New releases
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Top sellers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Preorder
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Under $10
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Under $20
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown-section">
                      <h3 className="section-title">
                        <span className="section-icon">🖥️</span>
                        By platform
                      </h3>
                      <ul className="section-items">
                        <li>
                          <a href="#" className="dropdown-item">
                            PC
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            PlayStation 5
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Xbox Series X|S
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Nintendo Switch
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown-section">
                      <h3 className="section-title">
                        <span className="section-icon">🎯</span>
                        By genre
                      </h3>
                      <ul className="section-items">
                        <li>
                          <a href="#" className="dropdown-item">
                            Action
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Adventure
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Casual
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Horror
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Indie
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Racing
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            Simulation
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            RPG
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="dropdown-promo1">
                    <div className="promo-content1">
                      <div className="promo-text1">
                        <p className="promo-discount1">
                          Hurry up to get a discount -49%
                        </p>
                        <h4 className="promo-title1">
                          Tiny Tina&apos;s Wonderlands
                        </h4>
                        <p className="promo-description1">
                          Embark on an epic adventure full of whimsy, wonder,
                          and high-powered weaponry! Roll your own multiclass
                          hero then shoot, loot, slash, and cast on a quest to
                          stop the Dragon Lord.
                        </p>
                        <button className="promo-button1">Shop Now</button>
                      </div>
                      <div className="promo-image1">
                        <img
                          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                          alt="Tiny Tina's Wonderlands"
                        />
                        <div className="demos-badge1">DEMOS</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/sales" className="nav-link">
              Sale
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Desktop Right Section */}
          <div className="navbar-right desktop-right">
            <div className="search-container">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search for products"
                className="search-input"
              />
            </div>

            <div className="social-icons">
              <Instagram size={18} className="social-icon" />
              <Youtube size={18} className="social-icon" />
            </div>

            <div className="user-actions">
              <button
                onClick={() => setIsSignInOpen(true)}
                className="action-icon-button"
              >
                <User size={18} className="action-icon" />
              </button>
              <div className="cart-container">
                <ShoppingCart size={18} className="action-icon" />
                <span className="cart-text">0 / £0.00</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link href="/" className="mobile-nav-link">
              Home
            </Link>
            <a href="#" className="mobile-nav-link">
              Games
            </a>
            <Link href="/sales" className="mobile-nav-link">
              Sale
            </Link>
            <Link href="/about" className="mobile-nav-link">
              About
            </Link>
            <Link href="/contact" className="mobile-nav-link">
              Contact
            </Link>
            <div className="mobile-search">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search for products"
                className="search-input"
              />
            </div>
            <div className="mobile-user-actions">
              <button
                onClick={() => setIsSignInOpen(true)}
                className="action-icon-button"
              >
                <User size={18} className="action-icon" />
              </button>
              <div className="cart-container">
                <ShoppingCart size={18} className="action-icon" />
                <span className="cart-text">0 / £0.00</span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <>
          <div
            className={`modal-overlay ${
              isSignInOpen ? 'overlay-visible' : ''
            }`}
            onClick={() => setIsSignInOpen(false)}
          ></div>
          <div
            className={`signin-modal ${
              isSignInOpen ? 'modal-visible' : ''
            }`}
            ref={signInRef}
          >
            <div className="modal-header">
              <h2 className="modal-title">Sign in</h2>
              <button
                className="close-button"
                onClick={() => setIsSignInOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form className="signin-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Username or email address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password <span className="required">*</span>
                </label>
                <div className="password-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="signin-button">
                Log In
              </button>

              <div className="form-footer">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="checkbox"
                  />
                  <label htmlFor="remember" className="checkbox-label">
                    Remember me
                  </label>
                </div>
                <a href="#" className="forgot-password">
                  Lost your password?
                </a>
              </div>

              <div className="signup-prompt">
                <div className="avatar-placeholder">
                  <User size={24} />
                </div>
                <p className="signup-text">No account yet?</p>
                <button type="button" className="create-account-button">
                  Create An Account
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
