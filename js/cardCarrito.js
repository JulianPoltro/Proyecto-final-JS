import { restarProducto } from "./restar.js";
import { sumarProducto } from "./sumar.js";
import { eliminarProducto } from "./eliminar.js";
import { cargar, make } from "./funciones.js";


export const crearCardsCarrito = (array, contenedor) => {

    const productos = cargar("carrito").map(producto => {
        const resultado = array.find(datos => datos.id == producto.id);
        
        return { ...resultado, cantidad: producto.cantidad };
    })
let total = productos.map(producto => { const subtotal =+ (producto.cantidad*producto.precio)
    return subtotal
});
let sumaTotal = total.reduce((a,b)=> a+b,0);
const verTotal = make("span",{innerText: `El total de su compra es: $${sumaTotal}`},{class:"sumaTotal"})
const carritoVacio = make("span",{innerText: "El carrito esta vacio"},{class:"carritoVacio"})

    contenedor.innerHTML = "";
    if (sumaTotal==0){
        contenedor.appendChild(carritoVacio)
    }else{
        contenedor.appendChild(verTotal)
    }
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
    sumarProducto();
    eliminarProducto();
}