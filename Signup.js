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
       alert("First Name must be filled out!");
       return false;
    }
    if (lname === "")
    {
       alert("Last Name must be filled out!");
       return false;
    }
     if(email  === "" || !email.includes('@'))
    {
       alert("Please Enter your Email!");
       return false;
     
     }
    if (password === "")
    {
        alert("Please Enter your Passcode!");
        return false;
    }
  
    
    if (cpassword === "")
    {
        alert("Confirm Your Passcode!");
        return false;
    }
    
    if (cpassword !== password)
    {
       alert("Password does not much!");
       return false;
    }
    if(password.length <8)
    {
  
        alert("Password Must be at least 8 character");
        return false;
    }

    {
        return true;
    }
   
}
