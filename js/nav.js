const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.querySelector('.sidebar');

hamburgerIcon.addEventListener('click', function() {
  sidebar.classList.add('active');
});
