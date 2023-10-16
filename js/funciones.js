export const crearCards = (array,contenedor) => {
    array.map(item => {
        contenedor.innerHTML += `
        <article class="productCard">
            <img src="${item.imagen}" alt="${item.etiquetas}">
            <a href="#">${item.titulo}</a>
            <span>${item.precio}</span>
        </article>
        `
    })
}
