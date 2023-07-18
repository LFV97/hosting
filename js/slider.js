var slides = document.querySelectorAll('.slider-slide');
var thumbnails = document.querySelectorAll('.slider-thumbnail');
var currentIndex = 0;
var touchStartX = 0;
var touchEndX = 0;

function showSlide(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    thumbnails[i].classList.remove('active');
  }

  slides[index].style.display = 'block';
  thumbnails[index].classList.add('active');
  currentIndex = index;
}

function navigateSlide(direction) {
  var newIndex = currentIndex + direction;

  if (newIndex < 0) {
    newIndex = slides.length - 1;
  } else if (newIndex >= slides.length) {
    newIndex = 0;
  }

  showSlide(newIndex);
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
  var swipeThreshold = 50;
  var swipeDirection = touchEndX - touchStartX;

  if (swipeDirection > swipeThreshold) {
    navigateSlide(-1); // Swipe to the left
  } else if (swipeDirection < -swipeThreshold) {
    navigateSlide(1); // Swipe to the right
  }
}

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function() {
    var index = Array.prototype.indexOf.call(this.parentNode.children, this);
    showSlide(index);
  });
}

document.querySelector('.slider-nav-left').addEventListener('click', function() {
  navigateSlide(-1);
});

document.querySelector('.slider-nav-right').addEventListener('click', function() {
  navigateSlide(1);
});

// Event listeners for touch events
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);
document.addEventListener('touchend', handleTouchEnd);
