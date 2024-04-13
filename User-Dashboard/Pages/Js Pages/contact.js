
// Fetching data to backend
const sendMessage = async() => {    
  let sender = document.getElementById('name').value; 
  let email = document.getElementById('email').value; 
  let text = document.getElementById('message').value;
  
  
   
  const formData = {
      name: sender,
      email: email,
      text: text,
      
  };

  try {
       sent.style.display='block'
       sent.innerText='sending message'
      await fetch('https://my-brand-backend-heoy.onrender.com/api/message', {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then(response => response.json())
      .then(async( result ) => {
          sent.innerText=await result.message;
          
      })
      .catch(error => {
          console.log(error);
      });
      
    alert('Message sent successfully');
   
    this.reset();
      
      setTimeout(()=>{sent.style.display='none'},4000)
  
    } catch (error) {
      alert("Error:", error); 
      alert('Failed to send message');
  }
};















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
