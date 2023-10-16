import { crearCards } from "./funciones.js"
import { obtenerProductos } from "./funciones.js"

const $ = document
const id = (id) => $.getElementById(id)
const selectorAll = (selector) => $.querySelectorAll(selector)

const section_products = id('products')

const cantCards = id('cantidadSelect')

obtenerProductos("../data.json",section_products, cantCards.value);