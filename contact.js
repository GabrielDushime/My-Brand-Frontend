document.addEventListener('DOMContentLoaded', function() {
   // Side Navigation
   function openNav() {
       document.getElementById("mySidenav").style.width = "118px";
   }

   function closeNav() {
       document.getElementById("mySidenav").style.width = "0";
   }

   // Copyright
   document.getElementById("current-year").textContent = new Date().getFullYear();

   // Form Validation
   function validateForm() {
       let name = document.getElementById("name").value;
       const email = document.getElementById("email").value;
       let message = document.getElementById("message").value;
       if (name === "") {
           document.getElementById("username-error").style.display = "inline";
           return false;
       }

       if (email === "" || !email.includes('@')) {
           document.getElementById("email-error").style.display = "inline";
           return false;
       }
       if (message === "") {
           document.getElementById("message-error").style.display = "inline";
           return false;
       }

       return true;
   }

   // Fetching Messages to my backend
   document.getElementById('contact-form').addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent default form submission behavior

       // Get form data
       const formData = new FormData(this);

       // Convert formData to JSON object
       const jsonObject = {};
       formData.forEach((value, key) => {
           jsonObject[key] = value;
       });

       // Send data to backend
       fetch('https://my-brand-backend-heoy.onrender.com/api/message', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify(jsonObject),
           })
           .then(response => {
               if (!response.ok) {
                   throw new Error('Network response was not ok');
               }
               return response.json();
           })
           .then(data => {
               console.log('Message created successfully:', data);
               // Optionally, you can display a success message to the user
           })
           .catch(error => {
               console.error('Error submitting message:', error);
               // Optionally, you can display an error message to the user
           });
   });
});
