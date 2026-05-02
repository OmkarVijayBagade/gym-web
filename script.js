/**
 * IRON PUMP GYM - Premium Fitness Website
 * Vanilla JavaScript for Interactions & Animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // LOADER
    // ========================================
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);

    // ========================================
    // SCROLL PROGRESS BAR
    // ========================================
    const scrollProgress = document.getElementById('scrollProgress');
    
    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }

    // ========================================
    // NAVBAR SCROLL EFFECTS
    // ========================================
    const navbar = document.getElementById('navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ========================================
    // MOBILE NAVIGATION
    // ========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking a link
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ========================================
    // ACTIVE NAV LINK ON SCROLL
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinkItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ========================================
    // SCROLL ANIMATIONS (Intersection Observer)
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade elements
    document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
        fadeObserver.observe(el);
    });

    // ========================================
    // TESTIMONIAL CAROUSEL
    // ========================================
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselDots = document.getElementById('carouselDots');
    
    if (carouselTrack && prevBtn && nextBtn) {
        const cards = carouselTrack.querySelectorAll('.testimonial-card');
        const totalCards = cards.length;
        let currentIndex = 0;
        let autoPlayInterval;
        
        // Create dots
        cards.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            carouselDots.appendChild(dot);
        });
        
        const dots = carouselDots.querySelectorAll('.carousel-dot');
        
        function updateCarousel() {
            carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
            resetAutoPlay();
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            updateCarousel();
        }
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 5000);
        }
        
        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }
        
        // Event listeners
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });
        
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        carouselTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carouselTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
                resetAutoPlay();
            }
        }
        
        // Start autoplay
        startAutoPlay();
        
        // Pause on hover
        carouselTrack.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        
        carouselTrack.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    }

    // ========================================
    // CONTACT FORM
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                interest: document.getElementById('interest').value,
                message: document.getElementById('message').value
            };
            
            // Simple validation
            if (!formData.name || !formData.phone) {
                alert('Please fill in all required fields (Name and Phone).');
                return;
            }
            
            // Show success message
            alert('Thank you for your interest! We will contact you shortly to schedule your free trial.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // PARALLAX EFFECT (Subtle)
    // ========================================
    let ticking = false;
    
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateEffects);
            ticking = true;
        }
    }
    
    function updateEffects() {
        updateScrollProgress();
        handleNavbarScroll();
        updateActiveNavLink();
        ticking = false;
    }

    // ========================================
    // SCROLL EVENT LISTENER
    // ========================================
    window.addEventListener('scroll', requestTick, { passive: true });

    // ========================================
    // KEYBOARD NAVIGATION
    // ========================================
    document.addEventListener('keydown', function(e) {
        // Close mobile menu on Escape
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ========================================
    // BUTTON RIPPLE EFFECT
    // ========================================
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 20px;
                height: 20px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                animation: ripple 0.6s ease-out;
                left: ${x}px;
                top: ${y}px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // COUNTER ANIMATION (For Stats - if added later)
    // ========================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // ========================================
    // REVEAL ON SCROLL (Alternative for complex animations)
    // ========================================
    const revealElements = document.querySelectorAll('.service-card, .why-card, .pricing-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // ========================================
    // PRELOADER FOR IMAGES (if real images are added)
    // ========================================
    function preloadImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src) {
                const newImg = new Image();
                newImg.src = src;
            }
        });
    }

    // Run initial functions
    handleNavbarScroll();
    updateScrollProgress();
    updateActiveNavLink();
    
    console.log('%cIRON PUMP GYM', 'font-size: 24px; font-weight: bold; color: #d4af37;');
    console.log('%cBuild Strength. Build Discipline.', 'font-size: 14px; color: #666;');
});
