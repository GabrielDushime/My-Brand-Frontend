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
    let password = document.getElementById("password").value;
    const email= document.getElementById("email").value;
   
     if(email  === "" || !email.includes('@'))
    {
<<<<<<< HEAD
        document.getElementById("email-error").style.display = "inline";
=======
       alert("Please Enter your Email!");
>>>>>>> d0d7b2a (initial commit)
       return false;
     
     }
    if (password === "")
    {
<<<<<<< HEAD
        document.getElementById("password-error").style.display = "inline";
=======
        alert("Please Enter your Passcode!");
>>>>>>> d0d7b2a (initial commit)
        return false;
    }

    {
        return true;
    }
   
}
