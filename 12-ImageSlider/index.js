const welcome = document.getElementById('Welcome');

// IMAGE SLIDER
const images = document.querySelectorAll('img');
let slideIndex = 0;
let intervalID = null;

// initializeSlider() after all the DOM content loads
document.addEventListener('DOMContentLoaded', initialiseSlider)
function initialiseSlider() {
    if (images.length > 0) {
        images[slideIndex].classList.add('displaySlide');
        intervalID = setInterval(nextSlide, 5000);
    }
}
function showSlide(index) {
    if (index >= images.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = images.length - 1;
    }
    images.forEach(image => {
        image.classList.remove('displaySlide');
    })
    images[slideIndex].classList.add('displaySlide');

}

function prevSlide() {
    slideIndex--;
    clearInterval(intervalID);
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}