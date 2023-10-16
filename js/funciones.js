export const crearCards = (array,contenedor) => {
    array.map(item => {
        contenedor.innerHTML += `
        <article class="productCard">
            <img src="./assets/img/vanitory1.jpg" alt="">
            <a href="#">Vanitory</a>
            <span>$100</span>
        </article>
        `
    })
}
