// signup.js

const BASE_URL = 'https://my-brand-backend-heoy.onrender.com/api';

function openNav() {
    document.getElementById("mySidenav").style.width = "118px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function validateForm() {
    let password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;

    if (fname === "") {
        document.getElementById("fname-error").style.display = "inline";
        return false;
    }
    if (lname === "") {
        document.getElementById("lname-error").style.display = "inline";
        return false;
    }
    if (email === "" || !email.includes('@')) {
        document.getElementById("email-error").style.display = "inline";
        return false;
    }
    if (password === "") {
        document.getElementById("password-error").style.display = "inline";
        return false;
    }
    if (cpassword === "") {
        document.getElementById("cpassword-error").style.display = "inline";
        return false;
    }
    if (cpassword !== password) {
        document.getElementById("matchpasscode-error").style.display = "inline";
        return false;
    }

    return true;
}

async function signUpUser(userData) {
    try {
        const response = await fetch(`${BASE_URL}/user/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }
}

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        const formData = {
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            cpassword: document.getElementById('cpassword').value,
        };
        signUpUser(formData)
            .then(data => {
                console.log('Signup successful:', data);
                // Show success message or redirect to another page
            })
            .catch(error => {
                console.error('Signup error:', error);
                // Show error message to the user
            });
    }
}

// Adding event listener to form submission
document.getElementById('signup-form').addEventListener('submit', submitForm);
