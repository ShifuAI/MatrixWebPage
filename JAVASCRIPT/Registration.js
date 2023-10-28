document.querySelector('.register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const name = document.querySelector('.register-form input[type="text"]').value;
    const email = document.querySelector('.register-form input[type="email"]').value;
    const password = document.querySelector('.register-form input[type="password"]').value;

    // Send the form data to the server using a POST request
    // ...

    // If the registration is successful, redirect the user to the login page
    // ...
});
