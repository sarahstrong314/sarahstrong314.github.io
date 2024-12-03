document.addEventListener('DOMContentLoaded', function() {
  // Initialize all slideshow sections
  document.querySelectorAll('.slideshow-section').forEach(function(section) {
    const slides = section.querySelectorAll(':scope > div');

    // Create and append navigation buttons
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-button prev';
    prevBtn.textContent = '←';
    prevBtn.style.display = 'none';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-button next';
    nextBtn.textContent = '→';
    if (slides.length <= 1) nextBtn.style.display = 'none';

    section.appendChild(prevBtn);
    section.appendChild(nextBtn);

    let currentSlide = 0;

    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
      });
      prevBtn.style.display = currentSlide === 0 ? 'none' : 'block';
      nextBtn.style.display = currentSlide === slides.length - 1 ? 'none' : 'block';
    }

    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
      }
    });
  });
});
