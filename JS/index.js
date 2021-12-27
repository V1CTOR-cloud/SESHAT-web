let fondo = document.querySelector('.imagen');
let dia_noche = document.querySelector('.dia_noche');
let menu = document.querySelector('.menuToggle');
let body = document.querySelector('body');
let nav = document.querySelector('.nav');

dia_noche.onclick = function() {
    dia_noche.classList.toggle('active');
    body.classList.toggle('dark');
    fondo.setAttribute("src", "../img/principal_oscuro.png");
    if (dia_noche.classList.contains('active')) {} else {
        fondo.setAttribute("src", "../img/principal_claro.png");
        cont2.classList.remove('dark');
    }
}

menu.onclick = function() {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

nav.onclick = function() {
    nav.classList.toggle
}