const $ = document
const id = (id) => $.getElementById(id)
const selector = (selector) => $.querySelector(selector)
const selectorAll = (selectorAll) => $.querySelectorAll(selectorAll)


const section_cart = id('cartFull')


const productosCarrito = JSON.parse(window.localStorage.getItem("addedCart"));
console.log(productosCarrito)


if (productosCarrito){
    productosCarrito.forEach(producto => {
    
    const section = document.createElement("section");
    section.innerHTML += `
    <article class="productCard">
    <img class="imgCard" src=${producto.imagen} alt="${producto.etiquetas}">
        <span>${producto.titulo}</span>
        <span>$${producto.precio}</span>
        <a href="#" class="cardBtn" id="${producto.id}">Agregar al carrito </a>
    </article>
    `
    });
}