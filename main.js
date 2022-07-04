const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('.navigation');

navToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
})