   function viewUser(id) {
        var user = document.getElementById("user" + id);
        var firstName = user.querySelector(".user-info p:nth-child(3)").innerText;
        var lastName = user.querySelector(".user-info p:nth-child(4)").innerText;
        var email = user.querySelector(".user-info p:nth-child(5)").innerText;

        var popup = document.getElementById("viewPopup");
        var popupContent = "<span class='close' onclick='closePopup(\"viewPopup\")'>&times;</span>";
        popupContent += "<h2>User Information</h2>";
        popupContent += "<p>First Name: " + firstName + "</p>";
        popupContent += "<p>Last Name: " + lastName + "</p>";
        popupContent += "<p>Email: " + email + "</p>";
        popup.innerHTML = popupContent;
        popup.style.display = "block";
    }

    function updateUser(id) {
        var user = document.getElementById("user" + id);
        var firstName = user.querySelector(".user-info p:nth-child(3)").innerText;
        var lastName = user.querySelector(".user-info p:nth-child(4)").innerText;
        var email = user.querySelector(".user-info p:nth-child(5)").innerText;

        var popup = document.getElementById("updatePopup");
        var popupContent = "<span class='close' onclick='closePopup(\"updatePopup\")'>&times;</span>";
        popupContent += "<h2>Update User</h2>";
        popupContent += "<form>";
        popupContent += "<label for='fname'>First Name:</label><br>";
        popupContent += "<input type='text' id='fname' name='fname' value='" + firstName + "'><br>";
        popupContent += "<label for='lname'>Last Name:</label><br>";
        popupContent += "<input type='text' id='lname' name='lname' value='" + lastName + "'><br>";
        popupContent += "<label for='email'>Email:</label><br>";
        popupContent += "<input type='email' id='email' name='email' value='" + email + "'><br><br>";
        popupContent += "<input type='button' value='Update' onclick='updateUserDetails(" + id + ")'>";
        popupContent += "</form>";
        popup.innerHTML = popupContent;
        popup.style.display = "block";
    }

    function deleteUser(id) {
        var user = document.getElementById("user" + id);
        user.remove();
    }

    function closePopup(popupId) {
        var popup = document.getElementById(popupId);
        popup.style.display = "none";
    }
    function updateUserDetails(id) {
        var user = document.getElementById("user" + id);
        var firstNameInput = document.getElementById("fname").value;
        var lastNameInput = document.getElementById("lname").value;
        var emailInput = document.getElementById("email").value;

        // Update user info in the DOM
        user.querySelector(".user-info p:nth-child(3)").innerText = firstNameInput;
        user.querySelector(".user-info p:nth-child(4)").innerText = lastNameInput;
        user.querySelector(".user-info p:nth-child(5)").innerText = emailInput;

        // Save updated user info to local storage
        var userData = {
            id: id,
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput
        };
        localStorage.setItem("user" + id, JSON.stringify(userData));

        closePopup('updatePopup');
    }

    // Function to load user data from local storage
    function loadUserData() {
        var users = document.querySelectorAll(".user");
        users.forEach(function(user) {
            var userId = user.id.slice(4); 
            var userData = localStorage.getItem("user" + userId);
            if (userData) {
                userData = JSON.parse(userData);
                user.querySelector(".user-info p:nth-child(3)").innerText = userData.firstName;
                user.querySelector(".user-info p:nth-child(4)").innerText = userData.lastName;
                user.querySelector(".user-info p:nth-child(5)").innerText = userData.email;
            }
        });
    }

    // Call loadUserData when the page loads
    window.addEventListener("load", loadUserData);

    function addUser() {
        var userId = getNextUserId();

        // Create a new user element
        var newUser = document.createElement("div");
        newUser.className = "user";
        newUser.id = "user" + userId;
        
        // Example user info, replace with actual data
        var userInfo = "<div class='user-info'>";
        userInfo += "<p>Id: " + userId + "</p>";
        userInfo += "<p>Profile: <img src='default_profile_photo.jpg' alt='Profile Photo'></p>";
        userInfo += "<p>First Name: New</p>";
        userInfo += "<p>Last Name: User</p>";
        userInfo += "<p>Email: newuser@example.com</p>";
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
        userContainer.appendChild(newUser);
    }