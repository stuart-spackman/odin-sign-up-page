const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const button = document.querySelector('button');
const resolved = document.getElementById('password-check');

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (password.value === '' || password.value === '') {
        resolved.classList = [];
        resolved.classList.add('rejected');
        resolved.innerText = 'password fields cannot be blank';
    } else if (password.value === confirmPassword.value) {
        resolved.classList = [];
        resolved.classList.add('resolved');
        resolved.innerText = 'passwords match - now your illness is cured!';
    } else {
        resolved.classList = [];
        resolved.classList.add('rejected');
        resolved.innerText = 'passwords do not match';
    }
});
