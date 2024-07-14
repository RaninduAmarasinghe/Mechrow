document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let currentIndex = 0;

    function autoScroll() {
        if (currentIndex >= slider.children.length) {
            currentIndex = 0;
        }
        slider.scrollTo({
            left: slider.children[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
        currentIndex++;
    }

    setInterval(autoScroll, 3000);
});
