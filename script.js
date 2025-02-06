let currentIndex = 1;
const totalItems = 2; // Update this to the new total number of items
const intervalTime = 10000; // 10 seconds

setInterval(() => {
    document.getElementById(`carousel-${currentIndex}`).checked = false;
    currentIndex = currentIndex % totalItems + 1;
    document.getElementById(`carousel-${currentIndex}`).checked = true;
}, intervalTime);