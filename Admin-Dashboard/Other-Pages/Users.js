document.addEventListener('DOMContentLoaded', function () {
    const viewButtons = document.querySelectorAll('.view-btn');
    const updateButtons = document.querySelectorAll('.update-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');

    viewButtons.forEach(button => {
        button.addEventListener('click', function () {
            const userInfo = this.parentElement.previousElementSibling.querySelector('.details').innerHTML;
            popupContent.innerHTML = `<p>${userInfo}</p>`;
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    updateButtons.forEach(button => {
        button.addEventListener('click', function () {
            const userInfo = this.parentElement.previousElementSibling.querySelector('.details');
            const inputs = `
            <style>
    /* Styles for dynamically generated update form */
    .update-input[type="text"],
    .update-input[type="email"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .update-button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .update-button:hover {
        background-color: #45a049;
    }
</style>
                <input type="text" class="update-input" id="first-name" placeholder="First Name" value="${userInfo.querySelector('.first-name').textContent}">
                <input type="text" class="update-input" id="last-name" placeholder="Last Name" value="${userInfo.querySelector('.last-name').textContent}">
                <input type="email" class="update-input" id="email" placeholder="Email" value="${userInfo.querySelector('.email').textContent}">
                <button class="update-button">Update</button>
            `;
            popupContent.innerHTML = inputs;
            popup.style.display = 'block';
            overlay.style.display = 'block';

            const updateButton = popupContent.querySelector('.update-button');
            const updateInputs = popupContent.querySelectorAll('.update-input');

            updateButton.addEventListener('click', function () {
                userInfo.querySelector('.first-name').textContent = updateInputs[0].value;
                userInfo.querySelector('.last-name').textContent = updateInputs[1].value;
                userInfo.querySelector('.email').textContent = updateInputs[2].value;
                closePopup();
            });
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const user = this.parentElement.parentElement;
            user.remove();
        });
    });

    document.querySelector('.close').addEventListener('click', closePopup);
    function closePopup() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }




 // Form submission handling
 document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(this); // Get form data
    fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Signup failed');
    })
    .then(data => {
        // Signup successful, create user entry in UI
        createUserEntry(data.firstName, data.lastName, data.email);
    })
    .catch(error => {
        console.error('Signup error:', error);
        // Handle signup error (display error message, etc.)
    });
});

// Function to dynamically create a new user entry in UI
function createUserEntry(firstName, lastName, email) {
    const container = document.querySelector('.container');

    // Create user HTML structure
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');

    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('user-info');
    userInfoDiv.innerHTML = `
        <img src="/User-Dashboard/Images/home.jpg" alt="User Photo">
        <div class="details">
            <p><span class="user-id">1</span></p>
            <p><span class="first-name">${firstName}</span></p>
            <p><span class="last-name">${lastName}</span></p>
            <p><span class="email">${email}</span></p>
            <p><span class="status">User</span></p>
        </div>
    `;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');
    actionsDiv.innerHTML = `
        <button class="view-btn">View</button>
        <button class="update-btn">Update</button>
        <button class="delete-btn">Delete</button>
    `;

    userDiv.appendChild(userInfoDiv);
    userDiv.appendChild(actionsDiv);

    container.appendChild(userDiv); // Append the new user entry to the container
}









});
