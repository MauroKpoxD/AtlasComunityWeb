// script.js (sin cambios de funcionalidad, solo se mantiene el efecto reveal y el cursor)
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  
  revealElements.forEach(el => observer.observe(el));
  
  const glow = document.querySelector('.cursor-glow');
  if (glow) {
    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      glow.style.opacity = '0.6';
    });
  }
  
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(15, 17, 23, 0.9)';
      navbar.style.backdropFilter = 'blur(16px)';
      navbar.style.borderBottomColor = 'rgba(67,92,242,0.3)';
    } else {
      navbar.style.background = 'rgba(15, 17, 23, 0.7)';
      navbar.style.backdropFilter = 'blur(12px)';
      navbar.style.borderBottomColor = 'var(--border)';
    }
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    });
  });
});