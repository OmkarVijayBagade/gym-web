const Services = () => {
  const services = [
    {
      icon: "🏋️",
      title: "Strength Training",
      desc: "Build raw power with our comprehensive strength programs. From powerlifting to bodybuilding, we've got you covered.",
      delay: "",
    },
    {
      icon: "🔥",
      title: "Weight Loss",
      desc: "Scientifically designed fat-burning programs that combine HIIT, cardio, and nutrition guidance for sustainable results.",
      delay: "delay-1",
    },
    {
      icon: "👤",
      title: "Personal Training",
      desc: "One-on-one sessions with elite trainers. Personalized workout plans, form correction, and constant motivation.",
      delay: "delay-2",
    },
    {
      icon: "❤️",
      title: "Cardio",
      desc: "State-of-the-art cardio equipment and guided classes to boost endurance and heart health.",
      delay: "delay-3",
    },
  ];

  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Our Programs</span>
          <h2 className="section-title">
            Premium <span className="gold-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Tailored programs designed for maximum results
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card fade-in ${service.delay}`}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <a href="#contact" className="service-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
