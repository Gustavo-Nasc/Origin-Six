/*===== NAV TOGGLE =====*/
const nav = document.getElementById('nav')
const navToggle = document.querySelectorAll('.toggle')

for (const element of navToggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show-menu')
    })
}

const navLink = document.querySelectorAll('nav .nav-list .nav-item .nav-link')

for (const link of navLink) {
    link.addEventListener('click', function () {
        nav.classList.remove('show-menu')
    })
}

/*===== REMOVE MENU MOBILE =====*/
const header = document.getElementById('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= navHeight) {
        header.classList.add('header-scroll')
    } else {
        header.classList.remove('header-scroll')
    }
})

/*===== SWIPER TESTIMONIALS =====*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination'
    },

    mousewheel: true,
    keyboard: true
});

/*===== SCROLL REVEAL =====*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .content-testimonials,
    #contact .text, #contact .links
    `,
    { interval: 100 }
)