let slideAtual = 1;

const maisSlide = (n) => {
    slideAtual = slideAtual + n;
    mostrarSlides(slideAtual);
};

const mostrarSlides = (n) => {

    let slides = document.getElementsByClassName("meuSlide");

    if (n > slides.length) {
        slideAtual = 1;
    }

    if (n < 1) {
        slideAtual = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideAtual - 1].style.display = "block";
};

window.maisSlide = maisSlide;

mostrarSlides(slideAtual);