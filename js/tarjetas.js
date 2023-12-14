const cargarProductos = async () => {
    const respuesta = await fetch('https://santibovina.pythonanywhere.com/productos');
    const datos = await respuesta.json();

    let slides = '';

    datos.forEach(producto => {
        slides += `
            <div class="swiper-slide">
                <div class="tarjeta">
                    <div class="tarjeta__imagen">
                        <img src="https://i.postimg.cc/tR8B4Z95/merch-cb.png" alt="imagen">
                    </div>
                    <div class="tarjeta__texto__boton">
                        <p>${producto.descripcion}</p>
                        <p>$${producto.precio}</p>
                        <div class="tarjeta__boton">
                            <button>
                                <p>Lo quiero!</p>
                            </button>
                        </div>
                    </div>
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
        slidesPerView: 1,
        spaceBetween: 1,
        autoplay: {
            delay: 3000,
        },
    });
};

cargarProductos();