import { eliminarProducto } from "./eliminar.js";

export const crearCardsCarrito = (array, contenedor, cant = array.length) => {
    contenedor.innerHTML = "";

    array.slice(0, cant).map(item => {
        contenedor.innerHTML += `
        <article class="productAdd">
        <img class="imgCardAdd" src=${item.imagen} alt="${item.etiquetas}">
    
            <span>Cantidad ${item.cantidad}</span>
            <span>$${item.precio * item.cantidad}</span>
            <a href="#" class="cardBtnEliminar fa-solid fa-x" id="eliminar-${item.id}"></a>
        </article>
        `
    })
    // agregar botones + - en cantidad
    // más css
    eliminarProducto();
}