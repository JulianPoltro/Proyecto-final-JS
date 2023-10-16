import { crearCards } from "./funciones.js"

const $ = document
const id = (id) => $.getElementById(id)
const selectorAll = (selector) => $.querySelectorAll(selector)

const section_products = id('products')

const obtenerProductos = async () => {
    const response = await fetch('../data.json', { method: 'GET' })
    const data = await response.json()
    crearCards(data,section_products);
}


// obtenerProductos();