// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        }
    });
});

// Responsive image loading
function loadResponsiveImages() {
    const images = document.querySelectorAll('[data-src]');
    
    images.forEach(img => {
        if (window.innerWidth <= 768) {
            img.src = img.dataset.mobileSrc || img.dataset.src;
        } else {
            img.src = img.dataset.src;
        }
    });
}

window.addEventListener('load', loadResponsiveImages);
window.addEventListener('resize', loadResponsiveImages);

// Disable animations on mobile devices for better performance
function handleAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches || window.innerWidth <= 768) {
        document.body.classList.add('reduce-motion');
    } else {
        document.body.classList.remove('reduce-motion');
    }
}

window.addEventListener('load', handleAnimations);
window.addEventListener('resize', handleAnimations);
