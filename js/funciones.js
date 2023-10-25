
export const actualizarNumCantidad = () => {
    let productCart = cargar("carrito");
    const numCart = document.querySelector("#numCantidad")
    let numCarrito = productCart.length;
    numCart.innerText = numCarrito;
}

export const cargar = function (clave) {
    const datos = window.localStorage.getItem(clave);
    if (datos) {
        return JSON.parse(datos);
    };
    return [];
};

export const guardar = function (datos, clave) {
    const convertir = JSON.stringify(datos, null, 2);
    return window.localStorage.setItem(clave, convertir);
};


export const obtenerProductos = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}


export const make = (tag, props, attrs) => {
    const element = document.createElement(tag)
    Object.keys(props).forEach(prop => element[prop] = props[prop])
    Object.keys(attrs).forEach(attr => element.setAttribute(attr, attrs[attr]))
    return element
}
