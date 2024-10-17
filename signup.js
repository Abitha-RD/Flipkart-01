// signup.js
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create user object
    const user = {
        fullname: fullname,
        email: email,
        password: password,
    };

    // Store user data in sessionStorage
    sessionStorage.setItem('user', JSON.stringify(user));

    // Redirect to home page after successful signup
    window.location.href = 'home.html';
});
