"use client";

const Pricing = () => {
  const plans = [
    {
      name: "Lifter",
      price: "2,499",
      period: "/month",
      description: "For dedicated lifters training independently",
      features: [
        { text: "24/7 Gym Access", included: true },
        { text: "All IPF Equipment", included: true },
        { text: "Chalk & Accessories", included: true },
        { text: "Competition Prep Resources", included: true },
        { text: "Monthly Programming", included: false },
        { text: "1-on-1 Coaching", included: false },
        { text: "Meet Day Coaching", included: false },
      ],
      featured: false,
      delay: "",
    },
    {
      name: "Competitor",
      price: "4,999",
      period: "/month",
      description: "For athletes preparing for competition",
      features: [
        { text: "24/7 Gym Access", included: true },
        { text: "All IPF Equipment", included: true },
        { text: "Custom Monthly Programming", included: true },
        { text: "Weekly Check-ins", included: true },
        { text: "Video Form Analysis", included: true },
        { text: "Nutrition Guidance", included: true },
        { text: "Meet Day Coaching", included: false },
      ],
      featured: true,
      delay: "delay-1",
    },
    {
      name: "Elite",
      price: "9,999",
      period: "/month",
      description: "For serious competitors chasing records",
      features: [
        { text: "24/7 Gym Access + Priority", included: true },
        { text: "All IPF Equipment", included: true },
        { text: "Daily Custom Programming", included: true },
        { text: "Unlimited Coach Access", included: true },
        { text: "Video Analysis (Daily)", included: true },
        { text: "Custom Nutrition Plan", included: true },
        { text: "Meet Day Coaching", included: true },
      ],
      featured: false,
      delay: "delay-2",
    },
  ];

  return (
    <section className="pricing section-padding" id="pricing">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Membership</span>
          <h2 className="section-title">
            Invest in <span className="gold-text">Strength</span>
          </h2>
          <p className="section-subtitle">
            Choose the plan that matches your competitive goals
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.featured ? "featured" : ""} fade-in ${plan.delay}`}
            >
              {plan.featured && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={feature.included ? "" : "disabled"}>
                    {feature.included ? (
                      <span className="check">✓</span>
                    ) : (
                      <span className="cross">×</span>
                    )}
                    {" "}{feature.text}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${plan.featured ? "btn-primary" : "btn-outline"}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
