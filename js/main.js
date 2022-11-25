const toggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const toggleIcon = document.querySelector('.nav-toggle .fa-solid');
const navItems = document.querySelectorAll('nav li a');
toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleIcon.classList.toggle('fa-xmark')
})

const nav = document.querySelector('nav');
// window.onscroll = () => {
//     if (window.scrollY >= 700) {
//         nav.classList.add('fixed', 'animate__fadeInDown');
//         nav.classList.remove('animate__fadeOutUp');

//     } else if (window.scrollY >= 500) {
//         nav.classList.add('animate__fadeOutUp');
//         nav.classList.remove('animate__fadeInDown');
//     } else {
//         nav.classList.remove('fixed');
//     }
// }
const box = document.querySelector('.home');
const up = document.querySelector('#up')

let b = window.scrollY + 20;
window.addEventListener('scroll', () => {
    if (window.scrollY >= 700) {
        if (window.scrollY > b) {
            nav.classList.add('fixed', 'animate__fadeInDown');
            nav.classList.remove('animate__fadeOutUp');
            console.log("down");
        } else {
            nav.classList.add('animate__fadeOutUp');
            nav.classList.remove('animate__fadeInDown');
            console.log("up")
        }
    } else{
        nav.classList.remove('fixed','animate__fadeInDown','animate__fadeOutUp');
    }

    if (window.scrollY >= 700) {
        up.style.opacity = 1;
    } else {
        up.style.opacity = 0;
    }
    b = window.scrollY;
})

up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})


