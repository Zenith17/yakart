document.addEventListener('DOMContentLoaded', function() {

    // Variables
    const btn = document.querySelector('.button');
    const nav = document.querySelector('.nav');
    const line1__bars = document.querySelector('.line1__bars-menu');
    const line2__bars = document.querySelector('.line2__bars-menu');
    const line3__bars = document.querySelector('.line3__bars-menu');
    const cerrarMenu  = document.querySelectorAll('.nav__ul a[href^="#"]');

    // Funciones

    function cambiarIconoNav() {
        nav.classList.toggle('activo');
        line1__bars.classList.toggle("activeline1__bars-menu");
        line2__bars.classList.toggle("activeline2__bars-menu");
        line3__bars.classList.toggle("activeline3__bars-menu");
    }

    // Llamar a la funcion "cambiarIconoNav cada vez que se presione el icono hamburguesa"
    btn.addEventListener('click', function() {
        cambiarIconoNav();
    });
    
    // Cambiar el icono hamburguesa

    // Hacer scroll para que cambie el navegador
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        header.classList.toggle("abajo", window.scrollY > 0);
    })

    // Cerrar menú hamburguesa al presionar un enlace del nav
    cerrarMenu.forEach(cerrarNav => {
        cerrarNav.addEventListener('click', function(){
            if( nav.querySelector("activo")) {
                nav.classList.remove('activo');
            }
            cambiarIconoNav();
            nav.classList.remove('activo');
        })
    })
})