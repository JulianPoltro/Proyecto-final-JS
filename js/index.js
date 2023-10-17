import { crearCards ,obtenerProductos} from "./funciones.js"


const $ = document
const id = (id) => $.getElementById(id)
const selector = (selector) => $.querySelector(selector)
const selectorAll = (selectorAll) => $.querySelectorAll(selectorAll)

const section_productsCat = id('productsCategory')
let btnCarrito = selectorAll(".cardBtn")

obtenerProductos("../data.json", section_productsCat);



console.log(btnCarrito)

const actualizarBtnCarrito = () =>{
    btnCarrito = document.querySelectorAll(".cardBtn");
}




// const section_carrito = selector('#carritoContenedor')
// const addCart = ()=> {

// }