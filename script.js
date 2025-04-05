// تفعيل تأثيرات التمرير
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// تأثيرات الفواصل عند التمرير
window.addEventListener('scroll', () => {
    const dividers = document.querySelectorAll('.section-divider, .animated-divider');
    dividers.forEach(div => {
        const rect = div.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
        }
    });
});

// معرض الصور المتحرك
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// التشغيل التلقائي
let autoSlide = setInterval(nextSlide, 5000);

// التحكم اليدوي
document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlide);
    nextSlide();
    autoSlide = setInterval(nextSlide, 5000);
});

document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlide);
    prevSlide();
    autoSlide = setInterval(nextSlide, 5000);
});

// التوقف عند التمرير
slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
slideshowContainer.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 5000);
});