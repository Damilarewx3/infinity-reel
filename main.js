// Portfolio Filtering
const filters = document.querySelectorAll('.filters button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    // Remove active class from all buttons
    filters.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    filter.classList.add('active');

    const category = filter.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Swiper Initialization
const swiper = new Swiper('.swiper-container', {
  loop: true, // Enables infinite looping
  autoplay: {
    delay: 3000, // Autoplay delay in milliseconds
  },
});

// Lightbox Initialization
lightbox.option({
  resizeDuration: 200, // Animation duration for resizing
  wrapAround: true, // Enable infinite looping
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
