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
      document.getElementById("username-error").style.display = "inline";
        return false;
     }
   
     if(email  === "" || !email.includes('@'))
     {
      document.getElementById("email-error").style.display = "inline";
       return false;
     
     }
      if (message === "")
     {
      document.getElementById("message-error").style.display = "inline";
        return false;
     }
    

        return true;

}
/*Pop Up Message*/
/* let popup=document.getElementById("popup"); */

let submit=document.getElementById("submit");

function openpopup()
{
    popup.classList.add("open-popup");
}
function closepopup()
{
    popup.classList.remove("open-popup");
}