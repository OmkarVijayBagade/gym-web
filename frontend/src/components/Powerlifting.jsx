const Powerlifting = () => {
  const equipment = [
    { name: "Competition Power Racks", count: "8" },
    { name: "Calibrated Competition Plates", count: "2000kg+" },
    { name: "Deadlift Platforms", count: "4" },
    { name: "Competition Bench Press", count: "6" },
  ];

  const specs = [
    { icon: "⚡", label: "Eleiko Equipment", desc: "Competition-grade bars and plates" },
    { icon: "🏆", label: "USAPL Standards", desc: "Official competition specifications" },
    { icon: "📊", label: "Force Plates", desc: "Velocity-based training tech" },
    { icon: "🎯", label: "Chalk Stations", desc: "Dedicated lifting areas" },
  ];

  return (
    <section className="powerlifting section-padding" id="powerlifting">
      <div className="container">
        <div className="powerlifting-grid">
          <div className="powerlifting-content fade-in">
            <span className="section-tag">Powerlifting Focus</span>
            <h2 className="section-title">
              Built for<br />
              <span className="gold-text">Serious Strength</span>
            </h2>
            <p className="powerlifting-desc">
              This isn&apos;t a commercial gym. This is a powerlifting facility designed 
              for those who chase numbers that matter. Competition-spec equipment, 
              calibrated plates, and an atmosphere that commands respect.
            </p>
            <p className="powerlifting-desc">
              From calibrated Eleiko bars to dedicated deadlift platforms with 
              custom flooring, every detail is optimized for one thing: moving 
              maximum weight with precision.
            </p>
            
            <div className="equipment-list">
              {equipment.map((item, index) => (
                <div key={index} className="equipment-item">
                  <span className="equipment-count">{item.count}</span>
                  <span className="equipment-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="powerlifting-specs fade-in delay-1">
            <div className="specs-container">
              <h3 className="specs-title">The Arsenal</h3>
              <div className="specs-grid">
                {specs.map((spec, index) => (
                  <div key={index} className="spec-card">
                    <div className="spec-icon">{spec.icon}</div>
                    <h4 className="spec-label">{spec.label}</h4>
                    <p className="spec-desc">{spec.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="record-board">
                <div className="record-header">
                  <span>GYM RECORDS</span>
                </div>
                <div className="record-list">
                  <div className="record-item">
                    <span className="record-lift">Squat</span>
                    <span className="record-weight">355kg</span>
                  </div>
                  <div className="record-item">
                    <span className="record-lift">Bench</span>
                    <span className="record-weight">260kg</span>
                  </div>
                  <div className="record-item">
                    <span className="record-lift">Deadlift</span>
                    <span className="record-weight">410kg</span>
                  </div>
                  <div className="record-item total">
                    <span className="record-lift">Total</span>
                    <span className="record-weight">1025kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Powerlifting;
