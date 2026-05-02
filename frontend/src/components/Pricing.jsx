const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "1,999",
      period: "/month",
      features: [
        { text: "Gym Access (6 AM - 10 PM)", included: true },
        { text: "Cardio Equipment", included: true },
        { text: "Weight Training Area", included: true },
        { text: "Locker Room Access", included: true },
        { text: "Personal Training", included: false },
        { text: "Group Classes", included: false },
        { text: "Nutrition Plan", included: false },
      ],
      featured: false,
      delay: "",
    },
    {
      name: "Standard",
      price: "3,499",
      period: "/month",
      features: [
        { text: "24/7 Gym Access", included: true },
        { text: "All Equipment", included: true },
        { text: "Group Fitness Classes", included: true },
        { text: "Sauna & Steam Room", included: true },
        { text: "2 PT Sessions/Month", included: true },
        { text: "Custom Nutrition Plan", included: false },
        { text: "Priority Booking", included: false },
      ],
      featured: true,
      delay: "delay-1",
    },
    {
      name: "Premium",
      price: "5,999",
      period: "/month",
      features: [
        { text: "24/7 Gym Access", included: true },
        { text: "All Equipment & Classes", included: true },
        { text: "Unlimited Personal Training", included: true },
        { text: "Custom Nutrition Plan", included: true },
        { text: "Body Composition Analysis", included: true },
        { text: "Priority Class Booking", included: true },
        { text: "Guest Passes (2/month)", included: true },
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
            Choose Your <span className="gold-text">Plan</span>
          </h2>
          <p className="section-subtitle">
            Invest in yourself. Start your transformation today.
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
