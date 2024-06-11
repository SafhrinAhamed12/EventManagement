// script.js

// Function to handle login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the username and password entered by the user
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    // Here, you would typically perform validation and authentication
    // For simplicity, let's assume the login is successful if both fields are non-empty
    if (username && password) {
        // Redirect the user to the page to enter the event
        window.location.href = "enter_event.html";
    } else {
        // Display an error message or perform other actions for unsuccessful login
        alert("Invalid username or password. Please try again.");
    }
});