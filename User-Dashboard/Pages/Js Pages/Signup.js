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
    const cpassword= document.getElementById("cpassword").value;
    const fname= document.getElementById("fname").value;
    const lname= document.getElementById("lname").value;
    const email= document.getElementById("email").value;
   
    if (fname === "")
    {
        document.getElementById("fname-error").style.display = "inline";
       return false;
    }
    if (lname === "")
    {
        document.getElementById("lname-error").style.display = "inline";
       return false;
    }
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
  
    
    if (cpassword === "")
    {
        document.getElementById("cpassword-error").style.display = "inline";
        return false;
    }
    
    if (cpassword !== password)
    {
        document.getElementById("matchpasscode-error").style.display = "inline";
       return false;
    }
  
    {
        return true;
    }
   
}