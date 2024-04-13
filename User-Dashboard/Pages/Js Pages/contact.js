document.addEventListener('DOMContentLoaded', function() {
  // Function to send form data to backend
  async function sendFormData(data) {
      try {
          const response = await fetch('https://my-brand-backend-heoy.onrender.com/api/message', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });
          const responseData = await response.json();
          if (response.ok) {
              // If successful response from backend
              console.log('Message sent successfully:', responseData);
              showSuccessPopup(); // Show success popup
          } else {
              // If backend returns an error
              console.error('Error sending message:', responseData.message);
              showErrorPopup(); // Show error popup
          }
      } catch (error) {
          // If there's a network error
          console.error('Network error:', error);
          showErrorPopup(); // Show error popup
      }
  }

  // Function to handle form submission
  function handleSubmit(event) {
      event.preventDefault(); // Prevent default form submission
      const form = document.getElementById('contact-form');
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      sendFormData(data); // Send form data to backend
  }

  // Add form submit event listener
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', handleSubmit);
  } else {
      console.error('Contact form not found');
  }
});















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
