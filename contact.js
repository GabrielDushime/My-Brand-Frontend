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
<<<<<<< HEAD
      document.getElementById("username-error").style.display = "inline";
=======
        alert("First Name must be filled out!");
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
      if (message === "")
     {
<<<<<<< HEAD
      document.getElementById("message-error").style.display = "inline";
=======
        alert("Please write your Message!");
>>>>>>> d0d7b2a (initial commit)
        return false;
     }
    
    {
        return true;
<<<<<<< HEAD
        
        
     }
     
    
}
/*Pop Up Message*/
let popup=document.getElementById("popup");
function openpopup()
{
    popup.classList.add("open-popup");
}
function closepopup()
{
    popup.classList.remove("open-popup");
=======
     }
    
>>>>>>> d0d7b2a (initial commit)
}