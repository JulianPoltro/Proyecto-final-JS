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

export const crearCardsCarrito = (array, contenedor, cant = array.length) => {
    contenedor.innerHTML = "";

    array.slice(0, cant).map(item => {
        contenedor.innerHTML += `
        <article class="productAdd">
        <img class="imgCardAdd" src=${item.imagen} alt="${item.etiquetas}">
            <span>Cantidad ${item.cantidad}</span>
            <span>$${item.precio}</span>
            <a href="#" class="cardBtn" id="${item.id}">Comprar ahora</a>
            <a href="#" class="cardBtnEliminar" id="eliminar-${item.id}">Eliminar producto</a>
        </article>
        `
    })

    eliminarProducto();
}

const eliminarProducto = () => {
    const btnEliminar = document.querySelectorAll(".cardBtnEliminar");
    btnEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();
            const carrito = JSON.parse(localStorage.getItem("carrito"))
            const idEliminar = e.target.id.split("eliminar-")[1];

            const productoEliminar = carrito.find(producto => producto.id == idEliminar)

            if (productoEliminar.cantidad > 0) {
                const indexEliminar = carrito.findIndex(item => item.id == idEliminar)
                carrito[indexEliminar].cantidad -= 1;
            }

            guardar(carrito, "carrito")
            const actCarrito = document.getElementById("cartFull")
            crearCardsCarrito(carrito,actCarrito)
            console.log(carrito);
        })
    })
}






const productCart = [];
const actualizarBtnCarrito = () => {
    const btnCarrito = document.querySelectorAll(".cardBtn");
    btnCarrito.forEach(boton => {
        boton.addEventListener("click", async (e) => {
            e.preventDefault();
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


                    cargar("carrito");
                    guardar(productCart, "carrito")
                    actualizarNumCantidad();
                })
        })
    })
}

const actualizarNumCantidad = () => {
    const numCart = document.querySelector("#numCantidad")
    let numCarrito = productCart.reduce((a, b) => a + b.cantidad, 0)
    numCart.innerText = numCarrito;
}

const cargar = function (clave) {
    const datos = window.localStorage.getItem(clave);
    if (datos) {
        return JSON.parse(datos);
    };
    return [];
};

const guardar = function (datos, clave) {
    const convertir = JSON.stringify(datos, null, 2);
    return window.localStorage.setItem(clave, convertir);
};




export const obtenerProductos = async (url, contenedor, cant) => {
    const response = await fetch(url, { method: 'GET' })
    const data = await response.json()
    crearCards(data, contenedor, cant);
}

