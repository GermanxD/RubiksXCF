// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/* Scroll hacia abajo*/
document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollButton");

    scrollButton.addEventListener("click", function () {
        // Desplazarse hacia abajo
        window.scrollTo({
            top: window.innerHeight, // Altura de la ventana del navegador
            behavior: "smooth"       // Desplazamiento suave
        });
    });
});