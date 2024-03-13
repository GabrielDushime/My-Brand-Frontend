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
    const cpassword= document.getElementById("cpassword").value;
    const fname= document.getElementById("fname").value;
    const lname= document.getElementById("lname").value;
    const email= document.getElementById("email").value;
   
    if (fname === "")
    {
<<<<<<< HEAD
        document.getElementById("fname-error").style.display = "inline";
=======
       alert("First Name must be filled out!");
>>>>>>> d0d7b2a (initial commit)
       return false;
    }
    if (lname === "")
    {
<<<<<<< HEAD
        document.getElementById("lname-error").style.display = "inline";
=======
       alert("Last Name must be filled out!");
>>>>>>> d0d7b2a (initial commit)
       return false;
    }
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
  
    
    if (cpassword === "")
    {
<<<<<<< HEAD
        document.getElementById("cpassword-error").style.display = "inline";
=======
        alert("Confirm Your Passcode!");
>>>>>>> d0d7b2a (initial commit)
        return false;
    }
    
    if (cpassword !== password)
    {
<<<<<<< HEAD
        document.getElementById("matchpasscode-error").style.display = "inline";
       return false;
    }
  
=======
       alert("Password does not much!");
       return false;
    }
    if(password.length <8)
    {
  
        alert("Password Must be at least 8 character");
        return false;
    }

>>>>>>> d0d7b2a (initial commit)
    {
        return true;
    }
   
}
