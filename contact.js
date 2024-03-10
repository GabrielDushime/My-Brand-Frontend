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
    let name = document.getElementById("name").value;
    const email= document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (name === "")
     {
        alert("First Name must be filled out!");
        return false;
     }
   
     if(email  === "" || !email.includes('@'))
     {
       alert("Please Enter your Email!");
       return false;
     
     }
      if (message === "")
     {
        alert("Please write your Message!");
        return false;
     }
    
    {
        return true;
     }
    
}