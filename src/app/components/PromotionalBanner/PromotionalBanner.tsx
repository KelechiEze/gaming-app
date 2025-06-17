import { Home, Gamepad2, DollarSign } from 'lucide-react';
import Link from 'next/link';
import './PromotionalBanner.css';

const PromotionalBanner = () => {
  return (
    <div className="promotional-banner">
      {/* Header Section */}
      <div className="banner-header">
        {/* Breadcrumb Navigation */}
       <div className="breadcrumb">
        <Link href="/" className="breadcrumb-item">
            <Home size={16} />
            Home
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-item breadcrumb-current">All Games</span>
        </div>

        {/* Results Counter */}
        <div className="results-counter">
          Showing all 20 results
        </div>
      </div>

      {/* Main Banner Content */}
      <div className="banner-content">
        {/* Left Content */}
        <div className="banner-left">
          <div className="discount-text">Discounts up to -75%</div>
          <h1 className="banner-title">Super Week Sale</h1>
         <p className="banner-description">
        Spring is the nicest season. It&apos;s the one that shows up and shovels all the Winter snow off your 
        driveway, tips its hat at you, and strolls away. Then it wakes all the bears and squirrels out of 
        hibernation and fills up all the streams with babbling water.
        </p>

        </div>

        {/* Right Content - 3D Elements */}
        <div className="banner-right">
          {/* VR Headset */}
          <div className="floating-element vr-headset">
            <img 
              src="/klopi.jpg" 
              alt="VR Headset" 
              className="element-image"
            />
          </div>

          {/* Game Controller */}
          <div className="floating-element game-controller">
            <Gamepad2 size={80} className="controller-icon" />
          </div>

          {/* Percentage Symbol */}
          <div className="floating-element percentage-symbol">
            <span className="percentage-text">%</span>
          </div>

          {/* Golden Coins */}
          <div className="floating-element coin coin-1">
            <DollarSign size={24} className="coin-icon" />
          </div>
          <div className="floating-element coin coin-2">
            <DollarSign size={20} className="coin-icon" />
          </div>
          <div className="floating-element coin coin-3">
            <DollarSign size={18} className="coin-icon" />
          </div>

          {/* DEMOS Badge */}
          <div className="demos-badge">DEMOS</div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
