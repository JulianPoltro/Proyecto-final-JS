import { guardar, actualizarNumCantidad, cargar} from "./funciones.js";

export const actualizarBtnCarrito = () => {
    const btnCarrito = document.querySelectorAll(".cardBtn");
    btnCarrito.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();
                    let productCart = cargar("carrito");
                    const idProducto = e.target.id
                    
                    
                    const existeProducto = productCart.some(item => item.id == idProducto);
                    
                    if (existeProducto) {
                        const indexCarrito = productCart.findIndex(item => item.id == idProducto)
                        productCart[indexCarrito].cantidad += 1;
                    } else {
                        productCart.push({id:idProducto,cantidad:1})
                    };



                    guardar(productCart, "carrito")
                    actualizarNumCantidad();
                });
        });
};