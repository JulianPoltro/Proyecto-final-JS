import { crearCards } from "./funciones.js"
import { obtenerProductos } from "./funciones.js"

const $ = document
const id = (id) => $.getElementById(id)
const selectorAll = (selector) => $.querySelectorAll(selector)

const section_products = id('products')




obtenerProductos("../data.json",section_products,5);