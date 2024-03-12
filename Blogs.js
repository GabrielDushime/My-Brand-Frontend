document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.card-button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Handle button click (e.g., show more details, open a link, etc.)
            console.log('Button clicked!');
        });
    });
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

/*Copyright*/
document.getElementById("current-year").textContent = new Date().getFullYear();
