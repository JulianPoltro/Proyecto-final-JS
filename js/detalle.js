



export const mostrarDetalle = () => {
    const detalleCards = document.querySelectorAll(".cardBtnDetail");
    
    detalleCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            Swal.fire({
                title: "",
                text: "Contenido",
                icon: 'info'
            });
        });
    });
}