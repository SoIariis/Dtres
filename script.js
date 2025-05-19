let currentIndex = 1;
const totalItems = 5;
const intervalTime = 8000;
let carouselTimeout;

function showNextCarousel() {
    document.getElementById(`carousel-${currentIndex}`).checked = false;
    currentIndex = currentIndex % totalItems + 1;
    document.getElementById(`carousel-${currentIndex}`).checked = true;
    resetCarouselTimeout();
}

function resetCarouselTimeout() {
    clearTimeout(carouselTimeout);
    carouselTimeout = setTimeout(showNextCarousel, intervalTime);
}

// Démarrage initial
resetCarouselTimeout();

// Réinitialise le timer à chaque changement manuel
for (let i = 1; i <= totalItems; i++) {
    const radio = document.getElementById(`carousel-${i}`);
    if (radio) {
        radio.addEventListener('change', function() {
            if (this.checked) {
                currentIndex = i;
                resetCarouselTimeout();
            }
        });
    }
}

// ...le reste du code...

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 2000);

    this.reset();
});