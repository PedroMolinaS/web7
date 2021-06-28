
const hamburger_icon = document.querySelector('.hamburger');
const nav_list = document.querySelector('.navbar__list');

hamburger_icon.addEventListener('click',()=>{
    nav_list.classList.toggle('active')
    hamburger_icon.classList.toggle('active');
})