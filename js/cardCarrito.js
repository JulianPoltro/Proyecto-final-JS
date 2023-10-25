import { eliminarProducto } from "./eliminar.js";
import { cargar } from "./funciones.js";


export const crearCardsCarrito = (array, contenedor) => {

    const productos = cargar("carrito").map(producto => {
        const resultado = array.find(datos => datos.id == producto.id);
        
        return { ...resultado, cantidad: producto.cantidad };
    })

    contenedor.innerHTML = "";
    productos.map(item => {
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