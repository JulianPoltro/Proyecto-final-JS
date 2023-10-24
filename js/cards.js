import { mostrarDetalle } from "./detalle.js";
import { actualizarBtnCarrito } from "./actualizarCarrito.js";


export const crearCards = (array, contenedor, cant = array.length) => {
    contenedor.innerHTML = "";
    array.slice(0, cant).map(item => {
        contenedor.innerHTML += `
        <article class="productCard">
        <img class="imgCard" src=${item.imagen} alt="${item.etiquetas}">
            <span>${item.titulo}</span>
            <span>$${item.precio}</span>
            <a href="#" class="cardBtn" id="${item.id}">Agregar al carrito </a>
            <a href="#" class="cardBtnDetail" id=""><i class="fa-solid fa-eye"></i></a>
        </article>
        `
    })
    actualizarBtnCarrito();
    mostrarDetalle();
}