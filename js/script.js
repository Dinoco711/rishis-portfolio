// Enhanced cursor effects
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
const links = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Enhanced Loading Screen Animation
const initLoader = () => {
    const loader = document.querySelector('.loader');
    const progressBar = document.querySelector('.progress-bar');
    
    // Start loading sequence
    setTimeout(() => {
        gsap.to(progressBar, {
            width: '100%',
            duration: 2,
            ease: 'power2.inOut',
            onComplete: () => {
                // Fade out loader
                gsap.to(loader, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        loader.style.display = 'none';
                        // Trigger entrance animations for hero section
                        gsap.from('.hero-content > *', {
                            y: 30,
                            opacity: 0,
                            duration: 1,
                            stagger: 0.2,
                            ease: 'power3.out'
                        });
                    }
                });
            }
        });
    }, 1000); // Start after 1 second
};

// Initialize loader when DOM is ready
document.addEventListener('DOMContentLoaded', initLoader);

// Add 3D effect to cube on mouse move
document.addEventListener('mousemove', (e) => {
    const cube = document.querySelector('.cube');
    if (cube) {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        cube.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Enhanced scroll reveal animations
ScrollReveal().reveal('.project-card', {
    delay: 200,
    distance: '40px',
    origin: 'bottom',
    interval: 100,
    opacity: 0,
    scale: 0.9,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    mobile: false
});

ScrollReveal().reveal('.skill-item', {
    delay: 200,
    distance: '40px',
    origin: 'bottom',
    interval: 100,
    opacity: 0,
    scale: 0.9,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    mobile: false
});

// Enhanced typing animation
const typed = new Typed('.typed-text', {
    strings: [
        'Tech Enthusiast',
        'IT Student',
        'Developer',
        'Problem Solver',
        'Innovation Seeker'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    cursorChar: '|',
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500
});

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    gsap.to('.hero-content', {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: 'power2.out'
    });
});

// Particle background effect
const createParticles = () => {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.setProperty('--x', `${Math.random() * 100}vw`);
        particle.style.setProperty('--y', `${Math.random() * 100}vh`);
        particle.style.setProperty('--duration', `${Math.random() * 20 + 10}s`);
        particle.style.setProperty('--delay', `${Math.random() * 5}s`);
        particlesContainer.appendChild(particle);
    }
};

// Enhanced scroll animations
const initScrollAnimations = () => {
    ScrollReveal().reveal('.hero-greeting', {
        delay: 300,
        distance: '50px',
        origin: 'left'
    });

    ScrollReveal().reveal('.hero-title', {
        delay: 500,
        distance: '50px',
        origin: 'left'
    });

    ScrollReveal().reveal('.hero-subtitle', {
        delay: 700,
        distance: '50px',
        origin: 'left'
    });

    ScrollReveal().reveal('.hero-description', {
        delay: 900,
        distance: '50px',
        origin: 'left'
    });

    ScrollReveal().reveal('.hero-buttons', {
        delay: 1100,
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.skill-item', {
        interval: 100,
        distance: '20px',
        origin: 'bottom',
        scale: 0.9
    });

    ScrollReveal().reveal('.project-card', {
        interval: 200,
        distance: '30px',
        origin: 'bottom',
        scale: 0.95
    });
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initScrollAnimations();
});

// Smooth section transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced hover effects
const addHoverEffects = () => {
    const cards = document.querySelectorAll('.skill-item, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
};

addHoverEffects();

// Enhanced Cursor Animation
const cursorInit = () => {
    const cursor = {
        outer: document.querySelector('.cursor-outer'),
        inner: document.querySelector('.cursor-inner'),
        trail: document.querySelector('.cursor-trail')
    };

    let mouseX = 0;
    let mouseY = 0;
    let outterX = 0;
    let outterY = 0;
    let innerX = 0;
    let innerY = 0;
    let trailX = 0;
    let trailY = 0;
    let speed = 0.2; // Cursor movement speed

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Set immediate position for inner cursor
        cursor.inner.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    // Animate cursors
    const animate = () => {
        // Smooth movement for outer cursor
        outterX += (mouseX - outterX) * speed;
        outterY += (mouseY - outterY) * speed;
        cursor.outer.style.transform = `translate(${outterX}px, ${outterY}px) translate(-50%, -50%)`;

        // Delayed movement for trail
        trailX += (mouseX - trailX) * (speed * 0.5);
        trailY += (mouseY - trailY) * (speed * 0.5);
        cursor.trail.style.transform = `translate(${trailX}px, ${trailY}px) translate(-50%, -50%)`;

        requestAnimationFrame(animate);
    };
    animate();

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
        'a, button, .skill-item, .project-card, .nav-link, .social-links a'
    );

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.outer.classList.add('cursor-hover');
            cursor.inner.classList.add('cursor-hover');
        });

        element.addEventListener('mouseleave', () => {
            cursor.outer.classList.remove('cursor-hover');
            cursor.inner.classList.remove('cursor-hover');
        });
    });

    // Click animation
    document.addEventListener('mousedown', () => {
        cursor.outer.style.transform = `translate(${outterX}px, ${outterY}px) translate(-50%, -50%) scale(0.8)`;
        cursor.inner.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(0.8)`;
    });

    document.addEventListener('mouseup', () => {
        cursor.outer.style.transform = `translate(${outterX}px, ${outterY}px) translate(-50%, -50%) scale(1)`;
        cursor.inner.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(1)`;
    });

    // Hide/show cursor when leaving/entering the window
    document.addEventListener('mouseleave', () => {
        cursor.outer.style.opacity = '0';
        cursor.inner.style.opacity = '0';
        cursor.trail.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.outer.style.opacity = '1';
        cursor.inner.style.opacity = '1';
        cursor.trail.style.opacity = '1';
    });
};

// Initialize cursor on page load
document.addEventListener('DOMContentLoaded', cursorInit);
