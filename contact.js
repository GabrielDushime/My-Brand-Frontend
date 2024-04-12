/*Side Navigation*/
function openNav()
{
    document.getElementById("mySidenav").style.width = "118px";
}

function closeNav() 
{
   document.getElementById("mySidenav").style.width = "0";
}



/*Copyright*/
document.getElementById("current-year").textContent = new Date().getFullYear();


/*Form Validation*/
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


//Fetching data to my backend

document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const jsonObject = {};
  formData.forEach((value, key) => {
    jsonObject[key] = value;
  });
  const jsonData = JSON.stringify(jsonObject);

  try {
    const response = await fetch('https://my-brand-backend-heoy.onrender.com/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    });
    
    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    alert('Message sent successfully');
   
    this.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send message');
  }
}); 
