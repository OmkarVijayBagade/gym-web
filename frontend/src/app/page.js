"use client";

import { useEffect } from "react";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Powerlifting from "@/components/Powerlifting";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document
      .querySelector("main")
      ?.querySelectorAll(".fade-in, .fade-in-up")
      .forEach((el) => {
        fadeObserver.observe(el);
      });

    // Reveal on scroll for specific cards
    const revealElements = document
      .querySelector("main")
      ?.querySelectorAll(".service-card, .why-card, .pricing-card");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements?.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      revealObserver.observe(el);
    });

    return () => {
      fadeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Powerlifting />
      <WhyUs />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
