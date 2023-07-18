var activeSlideIndex = 0;
var slides = document.querySelectorAll('.slide');
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

function showSlide(index) {
  // Ocultar todas las diapositivas
  slides.forEach(function(slide) {
    slide.style.display = 'none';
  });
  
  // Mostrar la diapositiva activa
  slides[index].style.display = 'flex';
}

function goToNextSlide() {
  if (activeSlideIndex < slides.length - 1) {
    activeSlideIndex++;
    showSlide(activeSlideIndex);
  }
  
  updateButtonStates();
}

function goToPreviousSlide() {
  if (activeSlideIndex > 0) {
    activeSlideIndex--;
    showSlide(activeSlideIndex);
  }
  
  updateButtonStates();
}

function updateButtonStates() {
  // Habilitar o deshabilitar los botones de navegación según la diapositiva activa
  prevButton.disabled = activeSlideIndex === 0;
  nextButton.disabled = activeSlideIndex === slides.length - 1;
}

function handleMouseWheel(event) {
  var delta = event.deltaY || event.detail || event.wheelDelta;
  
  if (delta > 0) {
    goToNextSlide();
  } else if (delta < 0) {
    goToPreviousSlide();
  }
  
  event.preventDefault();
}

// Asignar manejadores de eventos a los botones de navegación
prevButton.addEventListener('click', goToPreviousSlide);
nextButton.addEventListener('click', goToNextSlide);

// Asignar manejador de eventos para desplazamiento con rueda de mouse
window.addEventListener('wheel', handleMouseWheel);

// Mostrar la primera diapositiva inicialmente
showSlide(activeSlideIndex);
updateButtonStates();
