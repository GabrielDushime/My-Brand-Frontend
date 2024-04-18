/*Side Navigation*/
function openNav() {
    document.getElementById("mySidenav").style.width = "118px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/*Form Validation*/
function validateForm() {
    let password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    if (email === "" || !email.includes('@')) {
        document.getElementById("email-error").style.display = "inline";
        return false;
    }
    if (password === "") {
        document.getElementById("password-error").style.display = "inline";
        return false;
    }
    return true;
}

/* Login Function */
async function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateForm()) {
        return; 
    }

    try {
        const response = await fetch('https://my-brand-backend-heoy.onrender.com/api/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        const { token, user } = data;

       
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

       
        if (user.role === 'admin') {
            window.location.href = 'https://my-brand-gabriel-frontend.netlify.app/admin-dashboard/other-pages/dashboard';
        } else {
            window.location.href = 'https://my-brand-gabriel-frontend.netlify.app/user-dashboard/pages/html%20pages/userdashboard';
        }
    } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
    }
}


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    loginUser();
});
