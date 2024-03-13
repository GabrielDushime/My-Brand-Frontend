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


/*Comment section*/
document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("commentForm");
    const commentText = document.getElementById("commentText");
    const commentsList = document.getElementById("comments");

    let commentsArray = [];

    // Function to render comments
    function renderComments() {
        commentsList.innerHTML = "";
        commentsArray.forEach((comment, index) => {
            const li = document.createElement("li");
            li.classList.add("comment");
            li.innerHTML = `
                <div>${comment.text}</div>
                <button class="edit-btn" onclick="editComment(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteComment(${index})">Delete</button>
            `;
            commentsList.appendChild(li);
        });
    }

    // Function to add comment
    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const commentTextValue = commentText.value.trim();
        if (commentTextValue !== "") {
            commentsArray.push({ text: commentTextValue });
            commentText.value = "";
            renderComments();
        }
    });

    // Function to edit comment
    window.editComment = function(index) {
        const newText = prompt("Edit your comment:", commentsArray[index].text);
        if (newText !== null) {
            commentsArray[index].text = newText;
            renderComments();
        }
    };

    // Function to delete comment
    window.deleteComment = function(index) {
        if (confirm("Are you sure you want to delete this comment?")) {
            commentsArray.splice(index, 1);
            renderComments();
        }
    };
});