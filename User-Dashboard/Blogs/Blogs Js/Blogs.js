
/*Side Navigation*/
function openNav()
{
    document.getElementById("mySidenav").style.width = "118px";
}

function closeNav() 
{
   document.getElementById("mySidenav").style.width = "0";
}

const fetchAllBlogs=()=>{

}



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
      </div> 
  </div>
  `
  blogContainer.appendChild(blogCont)

   })
})




})

