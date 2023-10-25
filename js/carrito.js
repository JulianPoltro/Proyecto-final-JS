import { crearCardsCarrito } from "./cardCarrito.js"
import { obtenerProductos, cargar, make } from "./funciones.js"

const $ = document
const id = (id) => $.getElementById(id)
const mainSection = id("carritoMain")



export const carritoActualizado = () => {
    const cantidadProductos = cargar("carrito")

    if (cantidadProductos.length == 0){
        const sectionCarritoVacio = make('section', {innerText: 'El carrito esta vacio'}, {class: 'carritoVacio'});
        mainSection.appendChild(sectionCarritoVacio);
    } 

    
        const sectionCarritoLleno = make('section', {}, {class: 'carritoLleno', id: 'cartFull'});
        mainSection.appendChild(sectionCarritoLleno);
        const sectionLleno = id("cartFull")
        obtenerProductos("../data.json").then(data => {
            crearCardsCarrito(data, sectionLleno)
        })
    }




carritoActualizado();