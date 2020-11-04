const btnDepartamentos = document.getElementById('btn-departamentos'),
    grid = document.getElementById('grid'),
    contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
    contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
    esDispositivoMovil = () => window.innerWidth <= 800,
    btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
    logoMenu = document.getElementById('logo-menu');

btnDepartamentos.addEventListener('mouseover', () => {
    if (!esDispositivoMovil()) {
        grid.classList.add('activo');
    }
});

grid.addEventListener('mouseleave', () => {
    if (!esDispositivoMovil()) {
        grid.classList.remove('activo');
    }
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        if (!esDispositivoMovil()) {
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if (categoria.dataset.categoria == e.target.dataset.categoria) {
                    categoria.classList.add('activo')
                }
            });
        };
    });
});

/**** EventListeners para dispositivos moviles ****/
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault();
    if (contenedorEnlacesNav.classList.contains('activo')) {
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    } else {
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
});

/**** Click en boton de todos los departamentos (para version movil) ****/
btnDepartamentos.addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
    logoMenu.style.display = 'none';
});

/**** Boton de regresar en el menu de categorias ****/
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
    logoMenu.style.display = 'inline';
    
});

/*****/
document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        if (esDispositivoMovil()) {
            contenedorSubCategorias.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if (categoria.dataset.categoria == e.target.dataset.categoria) {
                    categoria.classList.add('activo');
                }
            });
        }
    });
});

/**** Boton de regresar en el menu de SUBcategorias ****/
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        contenedorSubCategorias.classList.remove('activo');
    });
});

btnCerrarMenu.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) => {
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible';
    logoMenu.style.display = 'inline';
});

/**** Hero ****/
const imgHero = document.querySelector('.img-hero');
const slides = imgHero.getElementsByTagName('img');
var i = 0;

function nextSlide(){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

function prevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

const contentHero = document.querySelector('.content-hero');
const slidesText = contentHero.getElementsByTagName('div');
var j = 0;

function nextSlideText(){
    slidesText[j].classList.remove('active');
    j = (j + 1) % slidesText.length;
    slidesText[j].classList.add('active');
}

function prevSlideText(){
    slidesText[j].classList.remove('active');
    j = (j - 1 + slidesText.length) % slidesText.length;
    slidesText[j].classList.add('active');
}