function validateForm() {
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;

    // Reset error messages
    document.getElementById("fname-error").style.display = "none";
    document.getElementById("lname-error").style.display = "none";
    document.getElementById("email-error").style.display = "none";
    document.getElementById("password-error").style.display = "none";
    document.getElementById("cpassword-error").style.display = "none";
    document.getElementById("matchpasscode-error").style.display = "none";

    // Validate first name
    if (fname === "") {
        document.getElementById("fname-error").style.display = "inline";
        return false;
    }

    // Validate last name
    if (lname === "") {
        document.getElementById("lname-error").style.display = "inline";
        return false;
    }

    // Validate email
    if (email === "" || !email.includes('@')) {
        document.getElementById("email-error").style.display = "inline";
        return false;
    }

    // Validate password
    if (password === "") {
        document.getElementById("password-error").style.display = "inline";
        return false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/.test(password)) {
        // Check if password meets the pattern requirements
        document.getElementById("password-error").textContent = "Password must contain at least one number, one uppercase letter, one lowercase letter, and be at least 8 characters long.";
        document.getElementById("password-error").style.display = "inline";
        return false;
    }

    // Validate confirm password
    if (cpassword === "") {
        document.getElementById("cpassword-error").style.display = "inline";
        return false;
    } else if (cpassword !== password) {
        // Check if confirm password matches password
        document.getElementById("matchpasscode-error").style.display = "inline";
        return false;
    }

    return true; // If all validations pass
}
