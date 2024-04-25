function openNav() {
    document.getElementById("mySidenav").style.width = "118px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  // Form Validation
  function validateForm() {
    var isValid = true;
  
    // Validate Name
    var name = document.getElementById("name").value;
    if (name.trim() === "") {
      document.getElementById("username-error").style.display = "inline";
      isValid = false;
    } else {
      document.getElementById("username-error").style.display = "none";
    }
  
    // Validate Email
    var email = document.getElementById("email").value;
    if (email.trim() === "") {
      document.getElementById("email-error").style.display = "inline";
      isValid = false;
    } else {
      document.getElementById("email-error").style.display = "none";
    }
  
    // Validate Message
    var message = document.getElementById("message").value;
    if (message.trim() === "") {
      document.getElementById("message-error").style.display = "inline";
      isValid = false;
    } else {
      document.getElementById("message-error").style.display = "none";
    }
  }
//likes and dislike

document.addEventListener('DOMContentLoaded', function() {

  const likeBtn = document.querySelector('.like-btn');
  const dislikeBtn = document.querySelector('.dislike-btn');
  const likeCount = document.querySelector('.like-count');
  const dislikeCount = document.querySelector('.dislike-count');

  
  let likeCounter = parseInt(localStorage.getItem('likeCounter')) || 0;
  let dislikeCounter = parseInt(localStorage.getItem('dislikeCounter')) || 0;

  likeCount.textContent = likeCounter;
  dislikeCount.textContent = dislikeCounter;

  likeBtn.addEventListener('click', () => {
      if (likeBtn.classList.contains('active')) {
          likeCounter--;
          likeBtn.classList.remove('active');
      } else {
          likeCounter++;
          likeBtn.classList.add('active');
      }
      likeCount.textContent = likeCounter;
      localStorage.setItem('likeCounter', likeCounter);
  });

  dislikeBtn.addEventListener('click', () => {
      if (dislikeBtn.classList.contains('active')) {
          dislikeCounter--;
          dislikeBtn.classList.remove('active');
      } else {
          dislikeCounter++;
          dislikeBtn.classList.add('active');
      }
      dislikeCount.textContent = dislikeCounter;
      localStorage.setItem('dislikeCounter', dislikeCounter);
  });
});

window.addEventListener("DOMContentLoaded",async()=>{
  // alert("working")
  const params=new URLSearchParams(window.location.search);
  const blogId=params.get("id")

  const blog=await fetch(`https://my-brand-backend-heoy.onrender.com/api/blog/${blogId}`,
  {method:"GET",
  Headers:{
      "content-Type":"Application/json"
  }});

  const response=await blog.json();
  console.log(response)
  let readmoreBlogContainer=document.querySelector(".read-more")
  readmoreBlogContainer.innerHTML=`
  <div class="content">
                  
  <h2  id="h2"><u>${response[0].title}</u></h2>
          <p>
          ${response[0].description}  
          </p>
          
       </div>
       <div class="card">
           <img src="${response[0].image}" width="350px" height="200px">
           <h2>Software Development</h2>
           <button class="like-btn">👍 <p class="like-count">0</p></button>
           <button class="dislike-btn">👎<p class="dislike-count">0</p></button>
       </div>
  
  `




});




