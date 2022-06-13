//DOM (Document Object Model)
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

const header = document.getElementById('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= navHeight) {
        header.classList.add('header-scroll')
    } else {
        header.classList.remove('header-scroll')
    }
})