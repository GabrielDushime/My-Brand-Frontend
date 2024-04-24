document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.card-button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
           
            console.log('Button clicked!');
        });
    });
});


// Listen for the custom event triggered by addingblog.js
document.addEventListener('newBlogCreated', function () {
    // Retrieve the new blog data from local storage
    const newBlogData = JSON.parse(localStorage.getItem('newBlog'));
    
    // Update the blog container with the new blog data
    const newCard = createCard(newBlogData);
    const blogContainer = document.getElementById('blog-container');
    blogContainer.appendChild(newCard);
});


window.addEventListener("DOMContentLoaded",()=>{
    fetch("https://my-brand-backend-heoy.onrender.com/api/blog",
    {method:"GET",
    Headers:{
        "content-Type":"Application/json"
    }
    }).then(response=>response.json()).then(data=>{
       let blogContainer=document.querySelector(".blogs");
       
       
       
       data.forEach(blog=>{
           let blogCont=document.createElement("div");
           blogCont.classList.add("flip-card")
           console.log(data)
        blogCont.innerHTML=`
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="https://res.cloudinary.com/dp2bnr5yi/image/upload/v1713718610/vrnpmsnnqj0joerrdlie.png" alt="Avatar" style="width:300px;height:200px;">
          </div>
          <div class="flip-card-back">
              <img src="https://res.cloudinary.com/dp2bnr5yi/image/upload/v1713718610/vrnpmsnnqj0joerrdlie.png" alt="Avatar" style="width:300px;height:200px;">
          <h2>${blog.title}</h2>
          <p>${blog.description}</p>
          <p id="p"><a href="/User-Dashboard/Blogs/Blogs Html/Card1.html?id="${blog._id}" id="read-more">Read More</a></p>
          <!-- /User-Dashboard/Blogs/Blogs Html/Card1.html -->
          </div> 
      </div>
      `
      blogContainer.appendChild(blogCont)
    
       })
    })
    
    
    
    
    })
    