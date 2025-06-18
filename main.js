const track = document.getElementById("carouselTrack");
const images = ["https://via.placeholder.com/300x200?text=1", "https://via.placeholder.com/500x300?text=2", "https://via.placeholder.com/300x200?text=3", "https://via.placeholder.com/300x200?text=4", "https://via.placeholder.com/500x300?text=5"];

let index = 1; // Start from the second image (centered)

function updateCarousel() {
    const leftImg = images[(index - 1 + images.length) % images.length];
    const centerImg = images[index];
    const rightImg = images[(index + 1) % images.length];

    track.innerHTML = `
      <img src="${leftImg}" class="carousel-image" />
      <img src="${centerImg}" class="carousel-image center" />
      <img src="${rightImg}" class="carousel-image" />
    `;
}

function moveSlide(direction) {
    index = (index + direction + images.length) % images.length;
    updateCarousel();
}

// Initial render
updateCarousel();
