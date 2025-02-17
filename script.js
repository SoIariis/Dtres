let currentIndex = 1;
const totalItems = 2;
const intervalTime = 10000;

setInterval(() => {
    document.getElementById(`carousel-${currentIndex}`).checked = false;
    currentIndex = currentIndex % totalItems + 1;
    document.getElementById(`carousel-${currentIndex}`).checked = true;
}, intervalTime);



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 2000);

    this.reset();
});