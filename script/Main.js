// This of the feedback page 
document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
    const successMessage = document.getElementById("successMessage");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const product = document.getElementById("product").value;
        const rating = document.getElementById("rating").value;
        const comments = document.getElementById("comments").value.trim();

        // Simple validation to check if any fields are empty
        if (!name || !email || !product || !rating || !comments) {
            alert("Please fill out all the fields.");
            return; // Stop submission if any field is empty
        }

        // Basic email validation
        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            alert("Please enter a valid email address.");
            return; // Stop submission if email is invalid
        }

        // Show a success message
        successMessage.textContent = "Thank you for your feedback!";
        successMessage.style.display = "block";

        // Hide the success message after 3 seconds
        setTimeout(function () {
            successMessage.style.display = "none";
        }, 3000);

        // Reset the form after submission
        feedbackForm.reset();
    });
});


// This is for the sub product extra review option

const allImages = document.querySelectorAll('.hover_container img');
const mainImage = document.getElementById('mainImage');
const cartButton = document.getElementById('cartbutton');
let cartCount = 0;

window.addEventListener('DOMContentLoaded', () => {
    allImages[0].parentElement.classList.add('active');
});

allImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        mainImage.src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg() {
    allImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

// Add Item to Cart Functionality
document.getElementById('addToCartBtn').addEventListener('click', () => {
    cartCount++;
    cartButton.textContent = cartCount; // Update cart item count
});
// Star Rating Interaction
const stars = document.querySelectorAll('#starRating span');
stars.forEach(star => {
  star.addEventListener('click', () => {
    stars.forEach(s => s.classList.remove('active'));
    star.classList.add('active');
  });
});

// Form Submission
const reviewForm = document.getElementById('reviewForm');
const writeReviewSection = document.getElementById('writeReview');
const thankYouMessage = document.getElementById('thankYouMessage');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('reviewTitle').value;
  const body = document.getElementById('reviewBody').value;
  const rating = document.querySelector('#starRating .active')?.getAttribute('data-value') || '0';

  if (title && body && rating !== '0') {
    // Hide the review form and show the thank you message
    writeReviewSection.style.display = 'none';
    thankYouMessage.style.display = 'block';

    // Reset the form
    reviewForm.reset();
    stars.forEach(star => star.classList.remove('active'));
  } else {
    alert('Please fill out all fields and select a rating.');
  }
});

// Additional Reviews Data
    const additionalReviews = [
    {
    rating: '★★★★☆',
    title: 'Great value for the price',
    author: 'Jessica L. on October 5, 2023',
    body: 'I’m happy with my purchase. It’s not perfect, but it’s a great deal for the price. Delivery was fast, and the product works as described.',
    helpful: { yes: 89, no: 3 },
    comments: [
        { author: 'Tom H.', text: 'How long did shipping take for you?' },
        { author: 'Jessica L.', text: 'About 3 days with Prime.' }
    ]
    },
    {
    rating: '★★★☆☆',
    title: 'Good, but could be better',
    author: 'Mark P. on October 10, 2023',
    body: 'The product works well, but the battery life is shorter than expected. It’s decent for the price, but I expected more.',
    helpful: { yes: 45, no: 12 },
    comments: [
        { author: 'Lisa M.', text: 'Did you try adjusting the settings? It improved the battery life for me.' },
        { author: 'Mark P.', text: 'Yes, but it still drains faster than I’d like.' }
    ]
    },
    {
    rating: '★★★★★',
    title: 'Amazing product!',
    author: 'Alex R. on October 20, 2023',
    body: 'This is one of the best products I’ve ever purchased. It’s reliable, efficient, and worth every penny.',
    helpful: { yes: 200, no: 10 },
    comments: [
        { author: 'Sam T.', text: 'I totally agree!' },
        { author: 'Alex R.', text: 'Glad you like it too!' }
    ]
    }
    ];

    // Load More Reviews
    const seeMoreButton = document.getElementById('seeMoreReviews');
    const topReviewsContainer = document.getElementById('topReviews');
    let currentIndex = 0;

    seeMoreButton.addEventListener('click', () => {
    if (currentIndex < additionalReviews.length) {
    const review = additionalReviews[currentIndex];
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    
    // Add inline styles to the review element
    reviewElement.setAttribute('style', 'border: 1px solid; padding: 20px 20px; background-color: rgba(226, 226, 226, 0.7); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);');
    
    reviewElement.innerHTML = `
        <div class="review-header">
        <span class="rating">${review.rating}</span>
        <span class="title">${review.title}</span>
        </div>
        <div class="review-meta">
        <span class="author">By ${review.author}</span>
        </div>
        <div class="review-body">
        ${review.body}
        </div>
        <div class="review-footer">
        <span class="helpful">Helpful? <button>Yes (${review.helpful.yes})</button> <button>No (${review.helpful.no})</button></span>
        </div>
        <div class="comments">
        ${review.comments.map(comment => `
            <div class="comment">
            <span class="author">${comment.author}</span>
            <span class="text">${comment.text}</span>
            </div>
        `).join('')}
        </div>
    `;
    
    topReviewsContainer.appendChild(reviewElement);
    currentIndex++;
    } else {
    seeMoreButton.disabled = true;
    seeMoreButton.textContent = 'No more reviews to show';
    }
    });

