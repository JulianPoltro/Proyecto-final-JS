export const crearCards = (array, contenedor) => {
    array.slice(0,8).map(item => {
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
