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
       alert("Please Enter your Email!");
       return false;
     
     }
    if (password === "")
    {
        alert("Please Enter your Passcode!");
        return false;
    }

    {
        return true;
    }
   
}
