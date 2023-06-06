// Add Hamburger menu 
// Add drop down menu 
// Add checkout functionality


const navBars = document.querySelector('.mobileMenu');
const mobileNav = document.querySelector('.mobileNav');
navBars.addEventListener('click', () => { 
    navBars.classList.toggle('active');
    mobileNav.classList.toggle('active');
});




