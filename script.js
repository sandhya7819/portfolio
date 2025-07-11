// Scroll to Top Button Functionality
const scrollBtn = document.getElementById('scrollBtn');

// Show or hide the scroll-to-top button depending on the scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = 'block'; // Show the button
    } else {
        scrollBtn.style.display = 'none'; // Hide the button
    }
};

// Scroll to the top when the button is clicked
scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Fade-in effect for About and Projects sections when in the viewport
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add fade-in class when sections come into view
window.addEventListener('scroll', () => {
    if (isInViewport(aboutSection)) {
        aboutSection.classList.add('fade-in');
    }

    if (isInViewport(projectsSection)) {
        projectsSection.classList.add('fade-in');
    }
});

// Contact Form Validation (Simple)
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea');

// Check form inputs on submit
form.addEventListener('submit', (e) => {
    let valid = true;

    // Loop through inputs to check for validity
    inputs.forEach((input) => {
        if (!input.validity.valid) {
            valid = false;
            input.style.border = '2px solid red'; // Highlight invalid inputs
        } else {
            input.style.border = '2px solid green'; // Highlight valid inputs
        }
    });

    // Prevent form submission if there are invalid fields
    if (!valid) {
        e.preventDefault();
    }
});

// Optional: Glow effect for profile photo border
const profilePhoto = document.querySelector('.profile-photo');
const profileWrapper = document.querySelector('.profile-photo-wrapper');

// Add glow effect on hover for the profile photo
profileWrapper.addEventListener('mouseover', () => {
    profileWrapper.style.animation = 'glowing-border 3s infinite ease-in-out';
});

profileWrapper.addEventListener('mouseout', () => {
    profileWrapper.style.animation = 'none'; // Remove glow effect when hover ends
});

// Optional: Adding smooth hover effect to the project cards
const projectCards = document.querySelectorAll('.project-card');

// Adding hover effects to project cards
projectCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

