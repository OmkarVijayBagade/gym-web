const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title fade-in-up">
          Build Strength.
          <br />
          Build Discipline.
        </h1>
        <p className="hero-subtitle fade-in-up delay-1">
          Transform your body. Elevate your mind. Join the elite.
        </p>
        <div className="hero-buttons fade-in-up delay-2">
          <a href="#pricing" className="btn btn-primary">
            Join Now
          </a>
          <a href="#contact" className="btn btn-secondary">
            Book Free Trial
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
