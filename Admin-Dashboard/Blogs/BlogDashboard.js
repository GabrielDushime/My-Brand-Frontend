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

