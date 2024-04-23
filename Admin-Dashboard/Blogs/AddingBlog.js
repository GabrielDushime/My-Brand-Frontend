document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('blog-form').addEventListener('submit', async (event) => {
        event.preventDefault(); 

       
        const formData = new FormData();
        formData.append('title', document.getElementById('blog-title').value);
        formData.append('description', document.getElementById('entire-desc').value);
        formData.append('image', document.getElementById('photo').files[0]);

        try {
          
            const response = await fetch('https://my-brand-backend-heoy.onrender.com/api/blog', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log('New blog created:', data);
                
                document.getElementById('blog-form').reset();
                alert('Blog Created Successfully')
                window.location.href = '/Admin-Dashboard/Blogs/BlogDashboard.html';
            } else {
                console.error('Failed to create blog:', response.statusText);
             
            }
        } catch (error) {
            console.error('Error creating blog:', error);
           
        }
       
    });
    });

