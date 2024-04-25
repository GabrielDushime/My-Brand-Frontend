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
          <img src="${blog.image}">
          </div>
          <div class="flip-card-back">
              <img src="${blog.image}">
          <h2>${blog.title}</h2>
          <p>${blog.description}</p>
          <p id="p"><a href="/User-Dashboard/Blogs/Blogs Html/Card1.html?id="${blog._id}" id="read-more">Read More</a></p>
          <!-- /User-Dashboard/Blogs/Blogs Html/Card1.html -->
          <div class="actions">
          <button class="update-btn" onclick="editBlog('${blog._id}')">Update</button>
          <button class="delete-btn" onclick="deleteBlog('${blog._id}')">Delete</button>
      </div>
          </div> 
      </div>
      `
      blogContainer.appendChild(blogCont)
    
       })
    })
    
    
    
    
    })
    

    async function deleteBlog(id){

        try{

            const response=await fetch(`http://localhost:3000/api/blog/${id}`,
            {
                method:"DELETE",   
            }
            )
    
            if (response.ok){
                alert(`Blog deleted successfully`)
                location.reload();
            }
            else{
                console.error("failed to delete the blog")
            }
        } catch(error){
            console.log("error deleting blog",error)
        }
    }


   