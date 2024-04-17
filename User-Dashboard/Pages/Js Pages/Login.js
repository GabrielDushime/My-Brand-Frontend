async function loginUser(email, password) {
    try {
        const response = await fetch('https://my-brand-backend-heoy.onrender.com/api/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        return response.json();
    } catch (error) {
        console.error('Error logging in:', error);
    }
}

document.forms['login-form'].addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const result = await loginUser(email, password);
    if (result && result.token) {
       
        if (result.isAdmin) {
            window.location.href = 'https://my-brand-gabriel-frontend.netlify.app/admin-dashboard/other-pages/dashboard';
        } else {
            window.location.href = 'https://my-brand-gabriel-frontend.netlify.app/user-dashboard/pages/html%20pages/userdashboard';
        }
    } else {
       
        console.error('Authentication failed:', result.message);
      
    }
});






/*Side Navigation*/
function openNav()
{
    document.getElementById("mySidenav").style.width = "118px";
}

function closeNav() 
{
   document.getElementById("mySidenav").style.width = "0";
}


/*Form Validation*/

function validateForm() {
    let password = document.getElementById("password").value;
    const email= document.getElementById("email").value;
   
     if(email  === "" || !email.includes('@'))
    {
        document.getElementById("email-error").style.display = "inline";
       return false;
     
     }
    if (password === "")
    {
        document.getElementById("password-error").style.display = "inline";
        return false;
    }

    {
        return true;
    }
   
}

