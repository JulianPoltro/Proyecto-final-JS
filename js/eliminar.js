import { carritoActualizado } from "./carrito.js";
import { guardar, cargar } from "./funciones.js";

export const eliminarProducto = () => {
    const btnEliminar = document.querySelectorAll(".cardBtnEliminar");
    btnEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {

            e.preventDefault();

            let carrito = cargar("carrito");
            const idEliminar = e.target.id.split("eliminar-")[1];

            const productoEliminar = carrito.find(producto => producto.id == idEliminar);


            if (productoEliminar) {
                if (productoEliminar.cantidad > 1) {
                    const indexEliminar = carrito.findIndex(item => item.id == idEliminar);
                    carrito[indexEliminar].cantidad -= 1;
                } else {
                    carrito = carrito.filter((item) => item.id !== productoEliminar.id)
                }
                guardar(carrito, "carrito");
                carritoActualizado();
            };
        });
    });
};