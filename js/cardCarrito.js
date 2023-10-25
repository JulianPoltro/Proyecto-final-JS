import { restarProducto } from "./restar.js";
import { cargar, make } from "./funciones.js";


export const crearCardsCarrito = (array, contenedor) => {

    const productos = cargar("carrito").map(producto => {
        const resultado = array.find(datos => datos.id == producto.id);
        
        return { ...resultado, cantidad: producto.cantidad };
    })

    contenedor.innerHTML = "";
    productos.map(item => {
        const productAdd = make("article",{},{class:"productAdd"});
        const imgCardAdd = make("img",{},{class:"imgCardAdd", src:item.imagen, alt:item.etiquetas});
        const cantidadCardAdd = make("span",{innerText: item.cantidad},{});
        const precioCardAdd = make("span",{innerText: `$ ${item.cantidad * item.precio}` },{});

        const cardBtnReducir = make("a",{},{class: "cardBtnMinus fa-solid fa-minus", id: `restar-${item.id}`});
        const cardBtnAumentar = make("a",{},{class: "cardBtnPlus fa-solid fa-plus", id: `sumar-${item.id}`});
        const cardBtnEliminar = make("a",{},{class: "cardBtnEliminar fa-solid fa-trash", id: `eliminar-${item.id}`});
        
        contenedor.appendChild(productAdd);
        productAdd.append(imgCardAdd, cardBtnReducir, cantidadCardAdd, cantidadCardAdd, cardBtnAumentar, precioCardAdd, cardBtnEliminar);

    })

    restarProducto();
}