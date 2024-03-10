document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.card-button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Handle button click (e.g., show more details, open a link, etc.)
            console.log('Button clicked!');
        });
    });
});