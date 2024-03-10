// Add any JavaScript functionality, interactions, or AJAX calls here
document.getElementById('scheduleForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const preferredDate = document.getElementById('date').value;
    
    // Add logic for scheduling, e.g., send data to the server, show confirmation, etc.
    console.log(`Scheduling for ${customerName} on ${preferredDate}`);
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userMessage = document.getElementById('message').value;

    // Add logic for handling the contact form, e.g., send data to the server, show confirmation, etc.
    console.log(`Message from ${userName} (${userEmail}): ${userMessage}`);
});
