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

/*Like icon*/
 // Initial like count and liked state
 var likeCount = 0;
 var liked = false;

 // Function to update like count and button text
 function updateLike() {
   if (liked) {
     likeCount--;
     liked = false;
   } else {
     likeCount++;
     liked = true;
   }
   document.getElementById("like-num").innerText = likeCount;
 }

 // Add event listener to the like button
 document.getElementById("like").addEventListener("click", function() {
   // Toggle like and update count
   updateLike();

   // Update button text
   if (liked) {
     document.getElementById("like").innerText = "Unlike";
   } else {
     document.getElementById("like").innerText = "Like";
   }
 });
