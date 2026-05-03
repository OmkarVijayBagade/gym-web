"use client";

const Services = () => {
  const programs = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12h16M8 8v8M16 8v8"/>
        </svg>
      ),
      title: "Powerlifting Prep",
      subtitle: "Competition Ready",
      desc: "12-16 week peaking programs designed for meet day success. Includes block periodization, RPE training, and technical refinement for all three lifts.",
      features: ["Custom peaking blocks", "Meet day strategy", "Weight class optimization"],
      delay: "",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M2 12h20"/>
        </svg>
      ),
      title: "Strength Foundations",
      subtitle: "Build The Base",
      desc: "For athletes new to competitive lifting. Master proper form, build work capacity, and develop the strength base needed for elite performance.",
      features: ["Technique mastery", "Movement screening", "Hypertrophy blocks"],
      delay: "delay-1",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "Elite Coaching",
      subtitle: "1-on-1 Attention",
      desc: "Individual programming with daily check-ins, video analysis, and direct access to our head coach. For serious competitors chasing records.",
      features: ["Daily programming", "Video form analysis", "24/7 coach access"],
      delay: "delay-2",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        </svg>
      ),
      title: "Rehab & Recovery",
      subtitle: "Stay Healthy",
      desc: "Injury prevention and rehabilitation for lifters. Keep your body resilient through heavy training blocks and extend your competitive career.",
      features: ["Prehab protocols", "Manual therapy", "Load management"],
      delay: "delay-3",
    },
  ];

  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Programs</span>
          <h2 className="section-title">
            Built for <span className="gold-text">Strength</span>
          </h2>
          <p className="section-subtitle">
            Evidence-based programming for competitive powerlifters
          </p>
        </div>
        
        <div className="services-grid">
          {programs.map((program, index) => (
            <div key={index} className={`service-card fade-in ${program.delay}`}>
              <div className="service-header">
                <div className="service-icon-svg">{program.icon}</div>
                <span className="service-subtitle">{program.subtitle}</span>
              </div>
              
              <h3 className="service-title">{program.title}</h3>
              <p className="service-desc">{program.desc}</p>
              
              <ul className="service-features">
                {program.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="service-link">
                <span>Enroll Now</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
