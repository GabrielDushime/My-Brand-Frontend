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


