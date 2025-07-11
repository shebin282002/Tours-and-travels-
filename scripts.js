// Hero Slideshow
const slides = document.querySelectorAll('.hero-slide');
const prevBtn = document.querySelector('.hero-control.prev');
const nextBtn = document.querySelector('.hero-control.next');
const indicatorsContainer = document.querySelector('.hero-indicators');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    if (i === index) {
      slide.style.zIndex = 2;
    } else {
      slide.style.zIndex = 1;
    }
  });
  updateIndicators(index);
  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function createIndicators() {
  indicatorsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('indicator-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      showSlide(i);
      resetInterval();
    });
    indicatorsContainer.appendChild(dot);
  });
}

function updateIndicators(index) {
  const dots = indicatorsContainer.querySelectorAll('span');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function startInterval() {
  slideInterval = setInterval(nextSlide, 5000);
}
function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}

if (slides.length > 0) {
  createIndicators();
  showSlide(0);
  startInterval();
  nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
  prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
}

// Scroll Reveal Animations
function revealOnScroll() {
  const revealEls = document.querySelectorAll('[data-animate]');
  const windowHeight = window.innerHeight;
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.classList.add('animated');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Button and Image Hover Effects (handled by CSS transitions)
// No extra JS needed for hover, but you can add ripple or click effects if desired. 