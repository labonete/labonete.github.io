// script.js

console.log("Website loaded successfully!");

// --- Functional mobile menu ---
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// --- On-scroll animations ---
const sections = document.querySelectorAll('.content-section');

// The hero section is visible on load, so we make it visible without observing
const heroSection = document.querySelector('.hero');
if(heroSection) {
    heroSection.classList.add('visible');
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the section is visible
});

sections.forEach(section => {
    observer.observe(section);
});