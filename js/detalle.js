import { actualizarBtnCarrito } from "./actualizarCarrito.js";



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
                        preConfirm: () => actualizarBtnCarrito()
                    // }).then((result) => {
                    //     if (result.isConfirmed) {
                    //         Swal.fire(
                    //             'Gracias!',
                    //             'El producto ha sido agregado con exito.',
                    //             'success',
                    //         )

                    //     }
                    })
                });
        });
    });
}