document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
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

                createUserInUserPage(formDataObj); 
                
                popup.classList.add('active');
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => console.error('Error:', error));
    });
  
    closePopupBtn.addEventListener('click', function() {
        popup.classList.remove('active');
        window.location.href = "https://my-brand-gabriel-frontend.netlify.app/user-dashboard/pages/html%20pages/login"; 
    });
  




    function createUserInUserPage(formDataObj) {
        var userId = getNextUserId();

        // Create a new user element
        var newUser = document.createElement("div");
        newUser.className = "user";
        newUser.id = "user" + userId;
        
        // Example user info, replace with actual data
        var userInfo = "<div class='user-info'>";
        userInfo += "<p>Id: " + userId + "</p>";
        userInfo += "<p>Profile: <img src='default_profile_photo.jpg' alt='Profile Photo'></p>";
        userInfo += "<p>First Name: " + formDataObj.firstName + "</p>";
        userInfo += "<p>Last Name: " + formDataObj.lastName + "</p>";
        userInfo += "<p>Email: " + formDataObj.email + "</p>";
        userInfo += "<p>Status: User</p>";
        userInfo += "</div>";

        // User actions buttons
        var userActions = "<div class='user-actions'>";
        userActions += "<button onclick='viewUser(" + userId + ")'>View</button>";
        userActions += "<button onclick='updateUser(" + userId + ")'>Update</button>";
        userActions += "<button onclick='deleteUser(" + userId + ")'>Delete</button>";
        userActions += "</div>";

        newUser.innerHTML = userInfo + userActions;

        // Append the new user to the container
        var userContainer = document.querySelector(".user-container");
        console.log("User container:", userContainer);
        if (userContainer) {
            userContainer.appendChild(newUser);
        } else {
            console.error("User container not found");
        }}

    function getNextUserId() {
        // Calculate the next user ID based on existing user elements
        var users = document.querySelectorAll(".user");
        return users.length + 1;
    }
});










function validateForm() {
    let password = document.getElementById("password").value;
    const cpassword= document.getElementById("cpassword").value;
    const fname= document.getElementById("fname").value;
    const lname= document.getElementById("lname").value;
    const email= document.getElementById("email").value;
   
    if (fname === "") {
        document.getElementById("fname-error").style.display = "inline";
        return false;
    }
    if (lname === "") {
        document.getElementById("lname-error").style.display = "inline";
        return false;
    }
    if (email  === "" || !email.includes('@')) {
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

    return true; 
}

/*Side Navigation*/
function openNav()
{
    document.getElementById("mySidenav").style.width = "118px";
}

function closeNav() 
{
   document.getElementById("mySidenav").style.width = "0";
}


