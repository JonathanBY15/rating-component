// rating buttons
const rating_buttons = document.querySelectorAll('.rating-button');

rating_buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        rating_buttons.forEach(otherButton => {
            otherButton.classList.remove('selected');
        });

        // Add 'selected' class to the clicked button
        button.classList.add('selected');
    });
});


// submit button
const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', () => {
    let isRatingSelected = false;
    // Check if a rating is selected
    rating_buttons.forEach(button => {
        if (button.classList.contains('selected')) {
            isRatingSelected = true;
        }
    });

    // If a rating is selected, save it to local storage and redirect to the thank you page
    if (isRatingSelected) {
        // Get the selected rating
        const rating = document.querySelector('.selected').textContent;
        localStorage.setItem("rating", rating);

        // Redirect to the thank you page
        window.location.href = 'thank-you.html';
    }
    else {
        alert('Please select a rating');
    }
});
