import {crearCardsCarrito} from "./funciones.js"

const $ = document
const id = (id) => $.getElementById(id)
const selector = (selector) => $.querySelector(selector)
const selectorAll = (selectorAll) => $.querySelectorAll(selectorAll)


const section_cart = id('cartFull')


const productosCarrito = JSON.parse(window.localStorage.getItem("carrito"));
// console.log(productosCarrito)


if (productosCarrito){
    crearCardsCarrito(productosCarrito,section_cart )
}