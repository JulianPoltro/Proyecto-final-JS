const $ = document
const id = (id) => $.getElementById(id)
const selectorAll = (selector) => $.querySelectorAll(selector)

const section_products = id('products')

const obtenerProductos = () => {
    fetch('../data.json', { method: 'GET' })
    .then((response) => response.json())
    .then((products) => console.log(products))
}