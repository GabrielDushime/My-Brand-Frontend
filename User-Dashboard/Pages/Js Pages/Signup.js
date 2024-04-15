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

    // If all validations pass, submit the form data to the backend
    const formData = new FormData(document.forms["contact-form"]);
    fetch('https://my-brand-backend-heoy.onrender.com/api/user/signup', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Handle success, maybe show a success message
            showSuccessPopup();
        } else {
            // Handle errors, maybe show an error message
            showErrorPopup();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors, maybe show an error message
        showErrorPopup();
    });

    // Prevent default form submission
    return false;
}
