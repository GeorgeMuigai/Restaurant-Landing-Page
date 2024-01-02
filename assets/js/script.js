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