<script src="script.js"></script>
// Popup logic
const modal = document.getElementById("logoModal");
const modalImg = document.getElementById("logoPopup");
const logo = document.getElementById("logoCircle");
const closeBtn = document.querySelector(".close");

logo.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Function to slide the circles horizontally
let currentIndex = 0;

function slide() {
    const sliderContainer = document.querySelector('.slider-container');
    const totalMembers = document.querySelectorAll('.member-circle').length;

    // Move to the next member
    currentIndex++;

    if (currentIndex >= totalMembers) {
        currentIndex = 0; // Loop back to the first member
    }

    // Move the container to the new position
    const translateX = -currentIndex * 80; // 80px is width + margin of each circle
    sliderContainer.style.transform = `translateX(${translateX}px)`;
}

// Set the interval for auto-slide every 3 seconds
setInterval(slide, 3000);
