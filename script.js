const slides = document.querySelectorAll('#carousel li');
const slideCount = slides.length;
let counter = 0;

setInterval(() => {
  slides[counter].classList.remove('active');
  counter = (counter + 1) % slideCount;
  slides[counter].classList.add('active');
}, 2000);

// DOMContentLoaded event ensures the HTML is fully loaded before running JS.
// This prevents errors like "element not found" when trying to access DOM elements too early.
// Use this event to safely run any code that interacts with HTML elements.


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('home-ourServices');
  const servicesSection = document.getElementById('services');

  if (btn && servicesSection) {
    btn.addEventListener('click', () => {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
  } else {
    console.error('Either button or services section not found');
  }
});
