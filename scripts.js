// script.js

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('ss
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
ubmit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form input
        // Here you could send the data to a server using fetch or XMLHttpRequest

        // Show a thank you alert
        alert(`Thank you for your message, ${name}!`);

        // Reset the form
        contactForm.reset();
    });
});
