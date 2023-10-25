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
            carrito = carrito.filter((item) => item.id !== productoEliminar.id)
            guardar(carrito, "carrito");
            carritoActualizado();
        });
    });
};