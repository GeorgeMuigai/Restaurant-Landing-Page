'use strict'

// preloader
const preloader = document.querySelector("[data-preloader]");

window.addEventListener('load', ()=> {
    preloader.classList.add('loaded');
    document.body.classList.add('loaded')
})

// multiple elements event listener
const multiEvent = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}
 
// navbar
const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector('[data-overlay]')

const toggleNavbar = ()=> {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active")
}

multiEvent(navTogglers, "click", toggleNavbar)

// header
const header = document.querySelector('[data-header]')

let lastScrollPos = 0;
const hideHeader = () => {
    const isScrollingBottom = lastScrollPos < window.scrollY;
    if(isScrollingBottom) {
        header.classList.add("hide")
    } else {
        header.classList.remove('hide')
    }
    lastScrollPos = window.scrollY
}

window.addEventListener("scroll", ()=> {
    if(window.scrollY >= 50) {
        header.classList.add('active')
        hideHeader()
    } else {
        header.classList.remove('active')
    }
})

// hero slider
const heroSlider = document.querySelector('[data-hero-slider]');
const heroSLiderItems = document.querySelectorAll('[data-hero-slider-item]');
const viewButtons = document.querySelectorAll("[data-view-btn]") 

let currentSLidePos = 0;
let lastActiveSlide = heroSLiderItems[0]

const updateSlider = () => {
    lastActiveSlide.classList.remove("active")
    heroSLiderItems[currentSLidePos].classList.add("active")
    lastActiveSlide = heroSLiderItems[currentSLidePos];
}

const slideNext = () => {
    if (currentSLidePos >= heroSLiderItems.length - 1) {
        currentSLidePos = 0;
    } else {
        currentSLidePos++;
    }

    updateSlider()
}

let autoSlideInterval;
const autoSlide = () => {
    
    autoSlideInterval = setInterval(function () {
        slideNext()
    }, 7000)
}

viewButtons[currentSLidePos].addEventListener('mouseover', ()=> {
    console.log("hovering");
    console.log(currentSLidePos);
})

window.addEventListener('load', autoSlide)


// PARALLAX EFFECT
