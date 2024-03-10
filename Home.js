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