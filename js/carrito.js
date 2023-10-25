import { crearCardsCarrito } from "./cardCarrito.js"
import { obtenerProductos, actualizarNumCantidad } from "./funciones.js"

const $ = document
const id = (id) => $.getElementById(id)


const section_cart = id('cartFull')
const section_cartEmpty = id('cartEmpty')

const productosCarrito = JSON.parse(window.localStorage.getItem("carrito"));



export const carritoActualizado = () => {
    if (productosCarrito.length > 0) {

        obtenerProductos("../data.json").then(data => {
            crearCardsCarrito(data, section_cart)
        })

        section_cartEmpty.classList.remove('carritoVacio');
        section_cartEmpty.classList.add('carritoNoVacio');

    }
}

carritoActualizado();