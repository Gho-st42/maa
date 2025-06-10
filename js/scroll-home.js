// Handles scroll-based section animations and welcome text translation

document.addEventListener('DOMContentLoaded', () => {
  // =======================
  // Reveal overlays on scroll
  // =======================
  const options = { threshold: 0.3 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, options);

  document.querySelectorAll('section .overlay').forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // =======================
  // Welcome text language rotation
  // =======================
  const translations = [
    'Hi',
    '你好',
    'Salut',
    'أهلاً',
    'Hallo',
    'Привет',
    'नमस्ते',
    'Ciao',
    'こんにちは',
    '안녕',
    'Hola'
  ];
  const target = document.getElementById('welcome-text');
  let i = 0;

  setInterval(() => {
    i = (i + 1) % translations.length;
    target.textContent = translations[i];
  }, 1500); // change every 1.5 seconds
});