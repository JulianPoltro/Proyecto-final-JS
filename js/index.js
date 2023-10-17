import { crearCards ,obtenerProductos} from "./funciones.js"


const $ = document
const id = (id) => $.getElementById(id)
const selector = (selector) => $.querySelector(selector)

const section_productsCat = id('productsCategory')


obtenerProductos("../data.json", section_productsCat);








// const section_carrito = selector('#carritoContenedor')
// const addCart = ()=> {

// }