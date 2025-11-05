// import '../styles/modern-normalize.css'
// import '../styles/style.css'

// Grab the mobile button and menu
const headerBars = document.querySelector('.header__bars');
const headerMenu = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header__link, .header__resume');

// Toggle menu on click
headerBars.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
});

// Close menu when any link be clicked
headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerMenu.classList.remove('active');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      headerMenu.classList.remove('active');
    }
  });