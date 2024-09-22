// Function to toggle the menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Form submission handling
document.querySelector('.contact form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a thank you message element
    const thankYouMessage = document.createElement('div');
    thankYouMessage.className = 'thank-you-message';
    thankYouMessage.innerText = 'Thank you for your message! It has been delivered successfully.';
    
    // Style the thank you message
    thankYouMessage.style.position = 'absolute';
    thankYouMessage.style.top = '50%';
    thankYouMessage.style.left = '50%';
    thankYouMessage.style.transform = 'translate(-50%, -50%)';
    thankYouMessage.style.backgroundColor = '#00abf0';
    thankYouMessage.style.color = '#fff';
    thankYouMessage.style.padding = '20px';
    thankYouMessage.style.borderRadius = '8px';
    thankYouMessage.style.zIndex = '1000';
    thankYouMessage.style.opacity = '0';
    thankYouMessage.style.transition = 'opacity 0.5s';

    // Append the message to the body
    document.body.appendChild(thankYouMessage);
    
    // Fade in the message
    setTimeout(() => {
        thankYouMessage.style.opacity = '1';
    }, 100);
    
    // Remove the message after 3 seconds
    setTimeout(() => {
        thankYouMessage.style.opacity = '0';
        setTimeout(() => {
            thankYouMessage.remove();
        }, 500);
    }, 3000);
});
function showConfirmation(event) {
    event.preventDefault(); // Prevent the form from submitting

    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block'; // Show the confirmation message

    // Optionally, clear the form fields
    document.getElementById('contactForm').reset();
}
