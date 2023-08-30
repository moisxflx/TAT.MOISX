// Seleccionar los elementos del DOM
const atrasButton = document.querySelector(".atras");
const siguienteButton = document.querySelector(".siguiente");
const slides = document.querySelector(".slides");

// Definir el contenido de las diapositivas
const textContents = ["BIENVENIDO", "WELCOME", "BEM-VINDO", "BENVENUTO"];

// Inicializar la diapositiva actual
let currentSlide = 0;

// Agregar evento al botón "Siguiente"
siguienteButton.addEventListener("click", () => {
    // Incrementar la diapositiva actual y asegurarse de que esté dentro de los límites
    currentSlide = (currentSlide + 1) % textContents.length;
    // Actualizar la interfaz con el nuevo contenido de la diapositiva
    updateSlides();
});

// Agregar evento al botón "Atrás"
atrasButton.addEventListener("click", () => {
    // Decrementar la diapositiva actual y asegurarse de que esté dentro de los límites
    currentSlide = (currentSlide - 1 + textContents.length) % textContents.length;
    // Actualizar la interfaz con el nuevo contenido de la diapositiva
    updateSlides();
});

// Función para actualizar el contenido de la diapositiva mostrada
function updateSlides() {
    // Actualizar el contenido de la diapositiva con el texto actual
    slides.textContent = textContents[currentSlide];
}

// Llamar a la función de actualización al cargar la página
updateSlides();


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2400); // Cambiar de diapositiva cada 2 segundos
}
