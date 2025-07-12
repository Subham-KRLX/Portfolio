// Responsive nav menu
document.getElementById('nav-toggle').onclick = function () {
  document.querySelector('.nav-links').classList.toggle('active');
};
// Smooth scroll with offset for nav links
document.querySelectorAll('.smooth-link').forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 60,
        behavior: 'smooth'
      });
    }
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    if(document.querySelector('.nav-links').classList.contains('active')) 
      document.querySelector('.nav-links').classList.remove('active');
  };
});

// Typing effect for hero
const typedText = document.getElementById('typed-text');
const texts = [
  "Web Developer",
  "Open Source Contributor",
  "Competitive Programmer",
  "Python & JS Enthusiast",
  "CSE (AI & ML) @ Newton School",
  "From Pilani Rajasthan"
];
let textIndex = 0, charIndex = 0, isDeleting = false, delay = 85;
function typeEffect() {
  let text = texts[textIndex];
  if(isDeleting) {
    charIndex--;
    typedText.textContent = text.substring(0, charIndex);
    if(charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 650);
    } else setTimeout(typeEffect, delay/2);
  } else {
    charIndex++;
    typedText.textContent = text.substring(0, charIndex);
    if(charIndex === text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else setTimeout(typeEffect, delay);
  }
}
typeEffect();

// Animate skill bars
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    setTimeout(() => {
      bar.style.width = bar.style.getPropertyValue('--skill');
    }, 800);
  });
  // Set theme from localStorage
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    const icon = document.getElementById('theme-toggle').querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});

// Theme toggle (dark/light)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
  document.body.classList.toggle('dark');
  const icon = themeBtn.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
  if(document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
};

// Contact form fake handler
document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('formSuccess').style.display = 'block';
  setTimeout(() => { document.getElementById('formSuccess').style.display = 'none'; }, 3500);
  this.reset();
};