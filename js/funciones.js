const crearCards = (array, contenedor, cant = array.length) => {
    contenedor.innerHTML = "";
    array.slice(0, cant).map(item => {
        contenedor.innerHTML += `
        <article class="productCard">
        <img class="imgCard" src=${item.imagen} alt="${item.etiquetas}">
            <span>${item.titulo}</span>
            <span>$${item.precio}</span>
            <a href="#" class="cardBtn" id="${item.id}">Agregar al carrito </a>
        </article>
        `
    })
    actualizarBtnCarrito();
}


const productCart = [];
const actualizarBtnCarrito = () => {
    const btnCarrito = document.querySelectorAll(".cardBtn");
    btnCarrito.forEach(boton => {
        boton.addEventListener("click", async (e) => {
            e.preventDefault();
            const idProduct = e.target.id
            fetch('../data.json')
                .then((response) => response.json())
                .then((data) => {
                    const idProducto = e.target.id
                    const productoEncontrado = data.find(producto => producto.id == idProducto)



                    const existeProducto = productCart.some(item => item.id == idProducto);

                    if (existeProducto) {
                        const indexCarrito = productCart.findIndex(item => item.id == idProducto)
                        productCart[indexCarrito].cantidad += 1;
                    } else {
                        productoEncontrado.cantidad = 1;
                        productCart.push(productoEncontrado)
                    }
                    actualizarNumCantidad();
                    localStorage.setItem("addedCart",JSON.stringify(productCart))
                })
        })
    })

}

const actualizarNumCantidad = () => {
    const numCart = document.querySelector("#numCantidad")
    let numCarrito = productCart.reduce((a, b) => a + b.cantidad, 0)
    numCart.innerText = numCarrito;
}


export const obtenerProductos = async (url, contenedor, cant) => {
    const response = await fetch(url, { method: 'GET' })
    const data = await response.json()
    crearCards(data, contenedor, cant);
}

