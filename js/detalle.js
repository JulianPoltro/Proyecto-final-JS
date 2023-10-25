import { cargar, guardar, actualizarNumCantidad } from "./funciones.js";



export const mostrarDetalle = () => {


    const detalleCards = document.querySelectorAll(".cardBtnDetail");

    detalleCards.forEach(card => {
        card.addEventListener('click', (e) => {

            fetch('../data.json')
                .then((response) => response.json())
                .then((data) => {

                    e.preventDefault();
                    const idDetalle = e.target.id.split("detalle-")[1]
                    const cardDetalle = data.find(datos => datos.id == idDetalle);
                    Swal.fire({
                        title: cardDetalle.titulo,
                        text: cardDetalle.descripcion,
                        text: cardDetalle.precio,
                        imageUrl: cardDetalle.imagen,
                        imageWidth: 200,
                        imageHeight: 200,
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Agregar al carrito!',
                        cancelButtonText: 'Seguir comprando',
                        preConfirm: () => {
                            agregarProductoDetalle(idDetalle)
                        }

                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Gracias!',
                                'El producto ha sido agregado con exito.',
                                'success',
                            )

                        }
                    })
                });
        });
    });
}


const agregarProductoDetalle = (id) => {

    let productCart= cargar("carrito");
    const existeProducto = productCart.some(item => item.id == id);

    if (existeProducto) {
        const indexCarrito = productCart.findIndex(item => item.id == id)
        productCart[indexCarrito].cantidad += 1;
    } else {
        productCart.push({id:id,cantidad:1})
    };
    guardar(productCart, "carrito")
    actualizarNumCantidad();
};