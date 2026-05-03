"use client";

const CTA = () => {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg">
        <div className="cta-noise"></div>
        <div className="cta-gradient"></div>
      </div>
      <div className="cta-overlay"></div>
      
      <div className="container">
        <div className="cta-content fade-in">
          <div className="cta-badge">
            <span className="badge-pulse"></span>
            <span>Now Accepting New Athletes</span>
          </div>
          
          <h2 className="cta-title">
            Your Next PR
            <br />
            <span className="title-accent">Starts Here.</span>
          </h2>
          
          <p className="cta-subtitle">
            Join 500+ competitive powerlifters who train at Iron Pump. 
            From your first meet to national championships—we build champions.
          </p>
          
          <div className="cta-features">
            <span className="cta-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              No contracts
            </span>
            <span className="cta-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Free trial session
            </span>
            <span className="cta-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Cancel anytime
            </span>
          </div>
          
          <a href="#contact" className="btn btn-primary btn-large cta-btn">
            <span>Claim Your Spot</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          
          <p className="cta-note">Limited spots available. New athlete intake closes monthly.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
