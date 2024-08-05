// Getting all inputs and storing them
const form = document.querySelector('#form');
console.log(form);

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the default form submission
        validateInputs(); // Check the validity of form inputs
    });
}

function validateInputs() {
    // Get values inside the function
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const cpassword = document.querySelector('#cpassword');

    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // Validate Username
    if (usernameVal === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    // Validate Email
    if (emailVal === '') {
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid Email');
    } else {
        setSuccess(email);
    }

    // Validate Password
    if (passwordVal === '') {
        setError(password, 'Password is required');
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    // Validate Confirm Password
    if (cpasswordVal === '') {
        setError(cpassword, 'Confirm password is required');
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }
}

// Show error message
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

// Show success
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

// Validate Email using regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
