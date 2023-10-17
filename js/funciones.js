export const crearCards = (array, contenedor,cant=array.length) => {
    contenedor.innerHTML ="";
    array.slice(0,cant).map(item => {
        contenedor.innerHTML += `
        <article class="productCard">
        <img class="imgCard" src=${item.imagen} alt="${item.etiquetas}">
            <span>${item.titulo}</span>
            <span>$${item.precio}</span>
            <a href="#" class="cardBtn" id="btn-${item.id}">Agregar al carrito </a>
        </article>
        `
    })
}

export const obtenerProductos = async (url,contenedor,cant) => {
    const response = await fetch(url, { method: 'GET' })
    const data = await response.json()
    crearCards(data,contenedor,cant);
}
