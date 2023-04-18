let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-btn');

 menuIcon.onclick = () => {
 menuIcon.classList.toggle('fa-xmark');
 navbar.classList.toggle('active');
}
window.onscroll = () => {
 menuIcon.classList.remove('fa-xmark');
 navbar.classList.remove('active');
}