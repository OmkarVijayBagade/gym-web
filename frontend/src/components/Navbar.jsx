"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlighting
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Why Us", href: "#why-us", id: "why-us" },
    { name: "Results", href: "#testimonials", id: "testimonials" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container nav-container">
        <a href="#" className="logo" onClick={closeMobileMenu}>
          <Image src="/images/ff-v1.webp" alt="Fitness Fort" width={46} height={46} className="navbar-logo-img" />
          <span className="navbar-brand-text">Fitness Fort</span>
        </a>
        <ul
          className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}
          id="navLinks"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
          id="mobileToggle"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
