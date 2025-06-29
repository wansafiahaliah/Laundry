document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Check if username already exists
        if (localStorage.getItem('user_' + username)) {
            alert('Username already exists!');
            return;
        }

        // Save user data to localStorage
        const user = { username, email, password };
        localStorage.setItem('user_' + username, JSON.stringify(user));

        alert('Registration successful!');
        form.reset();
            });
});

  // Redirect to homepage.html after successful registration
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('registerForm');
            form.addEventListener('submit', function (e) {
                // Wait for register.js to handle registration first
                setTimeout(function () {
                    // If registration was successful, redirect
                    if (!form.querySelector('.error')) {
                        window.location.href = 'login.html';
                    }
                }, 100); // Small delay to allow register.js to run
            });
        });