const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const slideInterval = 5000; // 8 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
        dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Initial slide
showSlide(currentSlide);

// Auto slide
setInterval(nextSlide, slideInterval);