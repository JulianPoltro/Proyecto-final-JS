import { mostrarDetalle } from "./detalle.js";
import { actualizarBtnCarrito } from "./actualizarCarrito.js";
import { make } from "./funciones.js";

export const crearCards = (array, contenedor, cant = array.length) => {
    contenedor.innerHTML = "";
    array.slice(0, cant).map(item => {

        const productCard = make('article', {}, {class: 'productCard'});
        const imgCard = make('img',{},{class:'imgCard', src: item.imagen, alt:item.etiquetas})
        const tituloCard = make('span', {innerText: item.titulo}, {});
        const precioCard = make('span', {innerText: item.precio}, {});
        const cardBtn = make('a', {innerText: 'Agregar al carrito'}, { class: 'cardBtn', id: item.id, href: '#' });
        const cardBtnDetail = make('a', {}, { class: 'cardBtnDetail fa-solid fa-eye', id: `detalle-${item.id}`, href: '#' });
        
        contenedor.appendChild(productCard)
        productCard.appendChild(imgCard);
        productCard.appendChild(tituloCard);
        productCard.appendChild(precioCard);
        productCard.appendChild(cardBtn);
        productCard.appendChild(cardBtnDetail);

    })
    actualizarBtnCarrito();
    mostrarDetalle();
}