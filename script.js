// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Close mobile nav if open
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Mobile Navigation Toggle (Hamburger Menu)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Optional: Toggle icon between bars and times
        const icon = navToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// "Scroll-to-reveal" animation for skill bars
const skillBarFills = document.querySelectorAll('.skill-fill');

const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const percent = entry.target.dataset.percent;
            entry.target.style.width = percent + '%';
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

skillBarFills.forEach(bar => {
    observer.observe(bar);
});

// Add a class to the header on scroll for a subtle background change (sticky header effect)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust value as needed (e.g., 50px from top)
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});