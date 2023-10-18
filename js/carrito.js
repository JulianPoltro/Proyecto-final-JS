import {crearCardsCarrito} from "./funciones.js"

const $ = document
const id = (id) => $.getElementById(id)
const selector = (selector) => $.querySelector(selector)
const selectorAll = (selectorAll) => $.querySelectorAll(selectorAll)


const section_cart = id('cartFull')
const section_cartEmpty = id('cartEmpty')

const productosCarrito = JSON.parse(window.localStorage.getItem("carrito"));
// console.log(productosCarrito)



if (productosCarrito.length>0){
    crearCardsCarrito(productosCarrito,section_cart)

        section_cartEmpty.classList.remove('carritoVacio');
        section_cartEmpty.classList.add('carritoNoVacio');
    
}