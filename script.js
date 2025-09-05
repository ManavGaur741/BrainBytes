document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // You would add your login logic here
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const grade = document.getElementById('grade').value;

        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Grade:', grade);

        // This is where you would send data to a server or handle authentication
        // For now, it just logs the values to the console
    });
});
