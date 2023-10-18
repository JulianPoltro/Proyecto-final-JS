const crearCards = (array, contenedor, cant = array.length) => {
    contenedor.innerHTML = "";
    array.slice(0, cant).map(item => {
        contenedor.innerHTML += `
        <article class="productCard">
        <img class="imgCard" src=${item.imagen} alt="${item.etiquetas}">
            <span>${item.titulo}</span>
            <span>$${item.precio}</span>
            <a href="#" class="cardBtn" id="btn-${item.id}">Agregar al carrito </a>
        </article>
        `
    })


}

const actualizarBtnCarrito = () => {
    const btnCarrito = document.querySelectorAll(".cardBtn");
    btnCarrito.forEach(boton => {
        boton.addEventListener("click", async (e) =>  {
            e.preventDefault();
            const idProduct = e.target.id
            fetch('../data.json')
                .then((response) => response.json())
                .then((data) => {
                    const idCard= e.target.id
                    const idProducto = idCard.split("-")
                    const productoEncontrado = data.find( producto => producto.id == idProducto[1])
                    
                    console.log(productoEncontrado);
                    

            })
        })
    })
}


const productCart = [];


export const obtenerProductos = async (url, contenedor, cant) => {
    const response = await fetch(url, { method: 'GET' })
    const data = await response.json()
    crearCards(data, contenedor, cant);
    actualizarBtnCarrito();
}

