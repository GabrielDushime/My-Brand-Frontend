
// Fetching data to backend
















// Side Navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "118px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Form Validation
function validateForm() {
  var isValid = true;

  // Validate Name
  var name = document.getElementById("name").value;
  if (name.trim() === "") {
    document.getElementById("username-error").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("username-error").style.display = "none";
  }

  // Validate Email
  var email = document.getElementById("email").value;
  if (email.trim() === "") {
    document.getElementById("email-error").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("email-error").style.display = "none";
  }

  // Validate Message
  var message = document.getElementById("message").value;
  if (message.trim() === "") {
    document.getElementById("message-error").style.display = "inline";
    isValid = false;
  } else {
    document.getElementById("message-error").style.display = "none";
  }

  // If form validation is successful, show the popup
  if (isValid) {
    document.getElementById("popup").style.display = "block";
    return false; // Prevent form submission
  }
  return isValid;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
