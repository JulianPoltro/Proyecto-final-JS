import { crearCardsCarrito } from "./cardCarrito.js";

export const eliminarProducto = () => {
    const btnEliminar = document.querySelectorAll(".cardBtnEliminar");
    btnEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {

            e.preventDefault();

            let carrito = JSON.parse(localStorage.getItem("carrito"));
            const idEliminar = e.target.id.split("eliminar-")[1];
            const productoEliminar = carrito.find(producto => producto.id == idEliminar);
            const indexEliminar = carrito.findIndex(item => item.id == idEliminar);
            if (productoEliminar) {
                if (productoEliminar.cantidad > 0) {
                    carrito[indexEliminar].cantidad -= 1;
                } else {
                    // carrito.splice(indexEliminar, 1);
                    carrito = carrito.filter((item) => item.id !== productoEliminar.id)
                }

                guardar(carrito, "carrito");
                const actCarrito = document.getElementById("cartFull");
                crearCardsCarrito(carrito, actCarrito);
            };
        });
    });
};