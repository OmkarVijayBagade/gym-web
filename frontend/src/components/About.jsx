const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content fade-in">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              Where Champions
              <br />
              <span className="gold-text">Are Made</span>
            </h2>
            <p className="about-text">
              Iron Pump isn&apos;t just a gym—it&apos;s a sanctuary for those who demand
              excellence. Our state-of-the-art facility combines cutting-edge
              equipment with world-class coaching to deliver results that speak
              for themselves.
            </p>
            <p className="about-text">
              Every rep, every set, every drop of sweat brings you closer to the
              best version of yourself. Join a community committed to greatness.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <div className="feature-info">
                  <h4>Certified Trainers</h4>
                  <p>Expert coaches with proven results</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-info">
                  <h4>Modern Equipment</h4>
                  <p>Premium machines & free weights</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-info">
                  <h4>Personal Coaching</h4>
                  <p>Customized training programs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image fade-in delay-1">
            <div className="image-frame">
              <div className="image-placeholder about-placeholder">
                <span className="placeholder-text">Gym Interior</span>
              </div>
              <div className="experience-badge">
                <span className="badge-number">15+</span>
                <span className="badge-text">
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
