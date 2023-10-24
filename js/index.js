import { obtenerProductos, actualizarNumCantidad } from "./funciones.js"
import { crearCards } from "./cards.js";

const $ = document
const id = (id) => $.getElementById(id)
const selector = (selector) => $.querySelector(selector)

const section_products = id('products')

const selectCantidad = selector('#cantidadSelect')
selectCantidad.addEventListener("change", (e, cant) => {
    e.preventDefault();
    cant = e.target.value;
    obtenerProductos("../data.json").then(data => crearCards(data, section_products, cant))
})



obtenerProductos("../data.json").then(data => {
    crearCards(data, section_products, 4)
    actualizarNumCantidad();
})