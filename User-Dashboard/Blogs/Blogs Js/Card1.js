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
