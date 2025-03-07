const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Rotar el DropDown
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
      dropdown.querySelector('i').classList.add('rotated');
  });
  dropdown.addEventListener('mouseleave', () => {
      dropdown.querySelector('i').classList.remove('rotated');
  });
});
