
const navBars = document.querySelector('.mobileMenu');
const menuToggle = document.querySelector('.mobileNav');
let menuVisible = false;


navBars.addEventListener('click', function(){
    if (menuVisible) { 
       menuToggle.style.left = '100%';
    } else { 
       menuToggle.style.left = '50%';
    }
    menuVisible = !menuVisible;
})

window.addEventListener('scroll', function () { 
    if (menuVisible){ 
        menuToggle.style.left = "100%";
        menuVisible = false;
    }
});





