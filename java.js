// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); // Get the position of the section
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible'); // Add the 'visible' class when the section is in view
        } else {
            section.classList.remove('visible'); // Remove the 'visible' class when the section is out of view
        }
    });
});

