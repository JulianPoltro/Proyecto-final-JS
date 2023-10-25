import { carritoActualizado } from "./carrito.js";
import { guardar, cargar } from "./funciones.js";

export const restarProducto = () => {
    const btnEliminar = document.querySelectorAll(".cardBtnMinus");
    btnEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {

            e.preventDefault();

            let carrito = cargar("carrito");
            const idRestar = e.target.id.split("restar-")[1];

            const productoRestar = carrito.find(producto => producto.id == idRestar);
                if (productoRestar.cantidad > 1) {
                    const indexRestar = carrito.findIndex(item => item.id == idRestar);
                    carrito[indexRestar].cantidad -= 1;
                } else {
                    carrito = carrito.filter((item) => item.id !== productoRestar.id)
                }
                guardar(carrito, "carrito");
                carritoActualizado();
        });
    });
};