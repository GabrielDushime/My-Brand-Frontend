document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const popup = document.getElementById('popup');
  const closePopupBtn = document.getElementById('close-popup');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      const formData = new FormData(form); 

      const formDataObj = {};
      formData.forEach((value, key) => {
          formDataObj[key] = value;
      });

      fetch(form.action, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataObj),
      })
      .then(response => {
          if (response.ok) {
              form.reset();
              popup.classList.add('active');
              // Assuming the server responds with the new message data
              return response.json();
          } else {
              throw new Error('Network response was not ok');
          }
      })
     
      .catch(error => console.error('Error:', error));
  });

  closePopupBtn.addEventListener('click', function() {
      popup.classList.remove('active'); 
  });

});

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
}