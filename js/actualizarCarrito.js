import { guardar, actualizarNumCantidad, cargar} from "./funciones";



export const actualizarBtnCarrito = () => {
    const btnCarrito = document.querySelectorAll(".cardBtn");
    btnCarrito.forEach(boton => {
        boton.addEventListener("click", async (e) => {
            e.preventDefault();
            fetch('../data.json')
                .then((response) => response.json())
                .then((data) => {
                    let productCart = cargar("carrito");
                    const idProducto = e.target.id
                    const productoEncontrado = data.find(producto => producto.id == idProducto);
                    const existeProducto = productCart.some(item => item.id == idProducto);
                    if (existeProducto) {
                        const indexCarrito = productCart.findIndex(item => item.id == idProducto)
                        productCart[indexCarrito].cantidad += 1;
                    } else {
                        productoEncontrado.cantidad = 1;
                        productCart.push(productoEncontrado)
                    };
                    guardar(productCart, "carrito")
                    actualizarNumCantidad();
                });
        });
    });
};