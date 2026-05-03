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
      stars: "★★★★★",
      text: '"Went from skinny to muscular in 8 months. The personalized training and nutrition guidance made all the difference."',
      avatar: "AP",
      author: "Arjun Patel",
      memberSince: "Member since 2022",
    },
    {
      stars: "★★★★★",
      text: '"The atmosphere here is electric. Every day I walk in motivated. The results speak for themselves—I\'m stronger than ever."',
      avatar: "SK",
      author: "Sanjay Kumar",
      memberSince: "Member since 2021",
    },
    {
      stars: "★★★★★",
      text: '"As a working professional, the flexible timings are a lifesaver. Early morning workouts before office changed my life."',
      avatar: "VM",
      author: "Vikram Mehta",
      memberSince: "Member since 2023",
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
          <span className="section-tag">Success Stories</span>
          <h2 className="section-title">
            Real <span className="gold-text">Transformations</span>
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
                    <div className="stars">{testimonial.stars}</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">{testimonial.avatar}</div>
                      <div className="author-info">
                        <h4>{testimonial.author}</h4>
                        <span>{testimonial.memberSince}</span>
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
