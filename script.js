let currentIndex = 0;
let intervalId;

const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateCarousel() {
    const newTransformValue = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${newTransformValue})`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function autoRotate() {
    intervalId = setInterval(() => {
        nextSlide();
    }, 2000);
}

function restartTimer() {
    clearInterval(intervalId);
    autoRotate(); 
}

autoRotate();
