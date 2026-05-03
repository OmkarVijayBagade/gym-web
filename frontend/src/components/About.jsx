"use client";

import Image from "next/image";

const About = () => {
  const achievements = [
    { number: "47", label: "National Champions" },
    { number: "12", label: "IPF Records" },
    { number: "200+", label: "State Medals" },
    { number: "1000kg+", label: "Club Total" },
  ];

  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content fade-in">
            <span className="section-tag">Our Legacy</span>
            <h2 className="section-title">
              Forged in Iron.
              <br />
              <span className="gold-text">Proven in Competition.</span>
            </h2>
            <p className="about-text">
              Since 2009, Iron Pump has been the breeding ground for India&apos;s 
              strongest athletes. We&apos;re not a fitness center—we&apos;re a powerlifting 
              institution where PRs are broken daily and champions are forged under 
              the bar.
            </p>
            <p className="about-text">
              Our head coach, a former IPF World Champion, has trained over 500 
              competitive powerlifters. Whether you&apos;re prepping for your first 
              meet or chasing a world record, this is where you belong.
            </p>
            
            <div className="achievements-row">
              {achievements.map((item, index) => (
                <div key={index} className="achievement-item">
                  <span className="achievement-number">{item.number}</span>
                  <span className="achievement-label">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>IPF Certified</h4>
                  <p>Competition standards equipment</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>24/7 Access</h4>
                  <p>Train on your schedule</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>500+ Athletes</h4>
                  <p>Strongest community in India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image fade-in delay-1">
            <div className="image-frame">
              <div className="about-visual">
                <Image
                  src="/images/about1.webp"
                  alt="Fitness Fort Powerlifting Headquarters"
                  fill
                  className="about-visual-img"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />


                <div className="experience-badge">
                  <span className="badge-number">16</span>
                  <span className="badge-text">
                    Years of
                    <br />
                    Dominance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
