"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Video Background */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero-video.webm" type="video/webm" />
        <source src="/videos/hero-video1.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-badge fade-in-up">
          <span className="badge-dot"></span>
          <span>Powerlifting Facility</span>
        </div>
        
        <h1 className="hero-title fade-in-up delay-1">
          Where Weakness
          <br />
          <span className="title-accent">Dies.</span>
        </h1>
        
        <p className="hero-subtitle fade-in-up delay-2">
          Competition-grade equipment. Elite coaching. No excuses. 
          Just iron, chalk, and the will to be stronger than yesterday.
        </p>
        
        <div className="hero-stats fade-in-up delay-3">
          <div className="stat-item">
            <span className="stat-number">1025</span>
            <span className="stat-label">KG RECORD</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">YEARS</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">ATHLETES</span>
          </div>
        </div>
        
        <div className="hero-buttons fade-in-up delay-4">
          <a href="#contact" className="btn btn-primary">
            <span>Start Training</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#powerlifting" className="btn btn-secondary">
            View Equipment
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">SCROLL</span>
      </div>
      
      {/* Barbell decoration */}
      <div className="hero-barbell">
        <svg viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="10" width="40" height="40" rx="2" fill="url(#plateGrad)" opacity="0.3"/>
          <rect x="65" y="15" width="30" height="30" rx="2" fill="url(#plateGrad)" opacity="0.25"/>
          <rect x="100" y="25" width="200" height="10" rx="5" fill="url(#barGrad)" opacity="0.2"/>
          <rect x="305" y="15" width="30" height="30" rx="2" fill="url(#plateGrad)" opacity="0.25"/>
          <rect x="340" y="10" width="40" height="40" rx="2" fill="url(#plateGrad)" opacity="0.3"/>
          <defs>
            <linearGradient id="plateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.5"/>
            </linearGradient>
            <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#888"/>
              <stop offset="50%" stopColor="#fff"/>
              <stop offset="100%" stopColor="#888"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
