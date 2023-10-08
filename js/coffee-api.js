const cargarRecetas = async() => {
    const respuesta = await fetch('https://api.sampleapis.com/coffee/hot')
    console.log(respuesta);

    const datos = await respuesta.json();

        let receta = '';
        
        datos.forEach(recetas => {
            receta += `<p>${recetas['title']}</p>`;
        });

        document.getElementById('api').innerHTML = receta;
}

cargarRecetas();