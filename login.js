document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const userData = localStorage.getItem('user_' + username);
    if (!userData) {
        alert('User not found!');
        return;
    }
    const user = JSON.parse(userData);
    if (user.password === password) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect after login
    } else {
        alert('Incorrect password!');
    }
});