//Carousel

let posicion = 1;

function regresar() {
    if (posicion > 1) {
        posicion--;
    } else {
        posicion = 6;
    }
    updateCarousel();
}

function adelantar() {
    if (posicion < 6) {
        posicion++;
    } else {
        posicion = 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const slide = document.getElementById('slide');
    const newPosition = (posicion - 1) * -100;
    slide.style.transform = `translateX(${newPosition}%)`;
}

//Carousel 2

let posicion2 = 1;

function regresar2() {
    if (posicion2 > 1) {
        posicion2--;
    } else {
        posicion2 = 5;
    }
    updateCarousel2();
}

function adelantar2() {
    if (posicion2 < 5) {
        posicion2++;
    } else {
        posicion2 = 1;
    }
    updateCarousel2();
}

function updateCarousel2() {
    const slide = document.getElementById('slide2');
    const newPosition = (posicion2 - 1) * -100;
    slide.style.transform = `translateX(${newPosition}%)`;
}

//Carousel 3

let posicion3 = 1;

function regresar3() {
    if (posicion3 > 1) {
        posicion3--;
    } else {
        posicion3 = 4;
    }
    updateCarousel3();
}

function adelantar3() {
    if (posicion3 < 4) {
        posicion3++;
    } else {
        posicion3 = 1;
    }
    updateCarousel3();
}

function updateCarousel3() {
    const slide = document.getElementById('slide3');
    const newPosition = (posicion3 - 1) * -100;
    slide.style.transform = `translateX(${newPosition}%)`;
}