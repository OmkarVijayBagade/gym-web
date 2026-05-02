"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please fill in all required fields (Name and Phone).");
      return;
    }

    alert(
      "Thank you for your interest! We will contact you shortly to schedule your free trial."
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      interest: "",
      message: "",
    });
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info fade-in">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">
              Ready to <span className="gold-text">Transform?</span>
            </h2>
            <p className="contact-desc">
              Visit us for a free tour or fill out the form to book your
              complimentary trial session.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>
                    123 Fitness Street, Bandra West
                    <br />
                    Mumbai, Maharashtra 400050
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>info@ironpump.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div className="contact-text">
                  <h4>Timings</h4>
                  <p>
                    Mon - Sat: 5:00 AM - 11:00 PM
                    <br />
                    Sunday: 7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-container fade-in delay-1">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <h3 className="form-title">Book Free Trial</h3>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="">Interested In</option>
                  <option value="strength">Strength Training</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="cardio">Cardio</option>
                  <option value="general">General Fitness</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
