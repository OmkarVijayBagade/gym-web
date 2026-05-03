"use client";

import { useState, useEffect, useCallback } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      stars: "★★★★★",
      text: '"Lost 25 kg in 6 months! The trainers at Fitness Fort don\'t just teach exercises—they transform lives. Best decision I ever made."',
      avatar: "RJ",
      author: "Rahul Joshi",
      memberSince: "Member since 2023",
    },
    {
      quote: "Broke the 1000kg total barrier at 74kg bodyweight.",
      text: '"This gym breeds champions. The equipment is IPF-spec, the coaches have actually competed at the highest level, and the environment pushes you to be better. Hit 1002.5kg total here."',
      avatar: "AP",
      author: "Arjun Patel",
      role: "IPF Competitor",
      lift: "Total: 1002.5kg",
      memberSince: "Training since 2021",
    },
    {
      quote: "First woman in the gym to deadlift 200kg.",
      text: "Never thought I'd compete in powerlifting. Started here for 'fitness' and ended up pulling 200kg. The coaching staff knows how to train women for strength without compromise.",
      avatar: "PM",
      author: "Priya Menon",
      role: "State Champion",
      lift: "Deadlift: 200kg",
      memberSince: "Training since 2023",
    },
    {
      quote: "At 42, set a new bench press state record at 165kg.",
      text: '"Age is just a number here. The masters programming kept me injury-free while pushing my bench from 120kg to 165kg. Competing at 42 alongside 20-year-olds—this place makes it possible."',
      avatar: "RK",
      author: "Rajesh Khanna",
      role: "Masters Record Holder",
      lift: "Bench: 165kg",
      memberSince: "Training since 2020",
    },
  ];

  const totalSlides = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Athlete Stories</span>
          <h2 className="section-title">
            Champions <span className="gold-text">Built Here</span>
          </h2>
        </div>
        <div className="testimonial-carousel">
          <button
            className="carousel-btn prev-btn"
            id="prevBtn"
            aria-label="Previous testimonial"
            onClick={prevSlide}
          >
            ‹
          </button>
          <div className="carousel-container">
            <div
              className="carousel-track"
              id="carouselTrack"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                display: "flex",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-achievement">
                      <span className="achievement-icon">🏆</span>
                      <span className="achievement-quote">{testimonial.quote}</span>
                    </div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-stats">
                      <span className="stat-badge">{testimonial.lift}</span>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">{testimonial.avatar}</div>
                      <div className="author-info">
                        <h4>{testimonial.author}</h4>
                        <span className="author-role">{testimonial.role}</span>
                        <span className="author-since">{testimonial.memberSince}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="carousel-btn next-btn"
            id="nextBtn"
            aria-label="Next testimonial"
            onClick={nextSlide}
          >
            ›
          </button>
        </div>
        <div className="carousel-dots" id="carouselDots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${currentIndex === index ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
