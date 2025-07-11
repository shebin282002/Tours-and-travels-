// Smooth scroll reveal for sections
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 80) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Animate hero carousel transitions (fade/slide)
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('heroCarousel');
  if (carousel) {
    carousel.addEventListener('slide.bs.carousel', function (e) {
      const slides = carousel.querySelectorAll('.carousel-item');
      slides.forEach(slide => {
        slide.classList.remove('fade-in-slide');
      });
      setTimeout(() => {
        const nextSlide = slides[e.to];
        if (nextSlide) nextSlide.classList.add('fade-in-slide');
      }, 10);
    });
    // Initial animation
    const firstSlide = carousel.querySelector('.carousel-item.active');
    if (firstSlide) firstSlide.classList.add('fade-in-slide');
  }
});

// Add hover effect to all .btn and .gallery-item
function addHoverEffects() {
  document.querySelectorAll('.btn, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', function() {
      this.classList.add('hovered');
    });
    el.addEventListener('mouseleave', function() {
      this.classList.remove('hovered');
    });
  });
}
document.addEventListener('DOMContentLoaded', addHoverEffects);

// Smooth scroll for nav links
function smoothScrollNav() {
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', smoothScrollNav);

// Optional: Highlight nav link on scroll
function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', highlightNavOnScroll);

// Fade-in/slide-in animation for carousel slides
const style = document.createElement('style');
style.innerHTML = `
.carousel-item.fade-in-slide {
  animation: fadeInSlide 1s cubic-bezier(.4,0,.2,1);
}
@keyframes fadeInSlide {
  from { opacity: 0; transform: translateY(40px) scale(0.98); }
  to { opacity: 1; transform: none; }
}
.btn.hovered, .btn-whatsapp.hovered {
  box-shadow: 0 4px 24px rgba(30,58,138,0.10);
  transform: scale(1.05);
}
.gallery-item.hovered {
  box-shadow: 0 8px 32px rgba(56,189,248,0.12);
  transform: scale(1.04);
}
`;
document.head.appendChild(style); 
