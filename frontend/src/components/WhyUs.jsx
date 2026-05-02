const WhyUs = () => {
  const features = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      title: "Expert Trainers",
      desc: "Certified professionals with years of experience in transforming physiques.",
      delay: "",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Flexible Timings",
      desc: "Open 5 AM to 11 PM. Train on your schedule, never miss a workout.",
      delay: "delay-1",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      title: "Affordable Plans",
      desc: "Premium fitness doesn't need premium prices. Competitive rates for all budgets.",
      delay: "delay-2",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Hygienic Environment",
      desc: "Rigorous cleaning protocols. Clean equipment, fresh air, sanitized spaces.",
      delay: "delay-3",
    },
  ];

  return (
    <section className="why-us section-padding" id="why-us">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Advantages</span>
          <h2 className="section-title">
            Why <span className="gold-text">Choose Us</span>
          </h2>
        </div>
        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className={`why-card fade-in ${feature.delay}`}>
              <div className="why-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
