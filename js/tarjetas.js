const cargarProductos = async () => {
    const respuesta = await fetch('https://santibovina.pythonanywhere.com/productos');
    const datos = await respuesta.json();

    let slides = '';

    datos.forEach(producto => {
        slides += `
            <div class="swiper-slide">
                <div class="tarjeta">
                    <p>${producto.descripcion}</p>
                    <img src= ${producto.imagen_url} alt="imagen">
                    <p>${producto.precio}</p>
                    <br>
                    <button>
                        <p>Lo quiero!</p>
                    </button>
                </div>
            </div>
        `;
    });

    const swiperContainer = document.createElement('div');
    swiperContainer.classList.add('swiper-container');
    swiperContainer.innerHTML = `
        <div class="swiper-wrapper">
            ${slides}
        </div>
    `;

    document.querySelector('#swiper').appendChild(swiperContainer);

    // Inicializar Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 1,
        autoplay: {
            delay: 3000,
        },
    });
};

cargarProductos();