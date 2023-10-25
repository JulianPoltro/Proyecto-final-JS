import { carritoActualizado } from "./carrito.js";
import { guardar, cargar } from "./funciones.js";

export const sumarProducto = () => {
    const btnEliminar = document.querySelectorAll(".cardBtnPlus");
    btnEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {

            e.preventDefault();

            let carrito = cargar("carrito");
            const idSumar = e.target.id.split("sumar-")[1];

            const productoSumar = carrito.find(producto => producto.id == idSumar);

                if (productoSumar.cantidad > 0) {
                    const indexSumar = carrito.findIndex(item => item.id == idSumar);
                    carrito[indexSumar].cantidad += 1;
                }

                guardar(carrito, "carrito");
                carritoActualizado();

        });
    });
};