import { crearCards , carritoAdd ,obtenerProductos} from "./funciones.js"


const $ = document
const id = (id) => $.getElementById(id)
const selector = (selector) => $.querySelector(selector)

const section_products = id('products')
const section_carrito = id('carrito')

// const selectCantidad = selector('#cantidadSelect')
// selectCantidad.addEventListener("change", (e,cant) => {
//     e.preventDefault();
//     cant = e.target.value;
//     obtenerProductos("../data.json", section_products, cant);
// })
obtenerProductos("../data.json", section_products, 8);
obtenerProductos("../data.json", section_carrito);