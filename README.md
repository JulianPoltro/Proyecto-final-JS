# Proyecto-final-JS
Proyecto segun consigna para crear un E-Market una HomePage donde encontramos los productos
y podemos seleccionar la cantidad para ver, el detalle del producto y agregarlo al carrito de compras
desde el HTML carrito tenemos una lista de productos agregados que se almacenan en localStorage
Se visualizan los productos agregados que poseen cantidad, al ser la cantidad 0 se eliminan de la lista y del almacenamiento
Los archivos HTML poseen un archivo propio de JS que importa funciones desde otro archivo JS

Dentro de Index.js se invoca ObtenerProductos() que recibe como parametro el JSON donde obtiene la lista de productos
utilizado como "base de datos". El section donde renderiza las Cards en HTML y la cantidad de cards a mostrar

El archivo carrito.js invoca crearCardsCarrito() solo cuando existan objetos almacenados en el local storage
recibe como parametros la lista de productos y el section donde renderiza las cards

en el archivo funciones.js tenemos las funciones que compartes los dos archivos anterios para poder crear las cards
dentro de las que se llama cada vez que realicemos click a travez de un evento a las funciones de actualizar carrito o mostrar detalles

El detalle se muetras a travez de sweet Alert

Las cards carrito invocan a la funcion para eliminar del carrito a travez de una X como boton

Eliminar producto lo realiza a traves de reducir la cantidad hasta llegar a 0, donde con la funcion splice se elimina el objeto del array

cada click en eliminar llama a la funcion guardar en localStorage y la funcion crearCardsCarrito para actulizar la cantidad en pantalla

La funcion actualizar carrito actualiza no solo el contador visual con una funcion modificando el innerText,
si no tambien lo almacenado en localStorage, guardando el objeto completo

LAs funciones cargar y guardar se utilizan para actualizar el local Storage

Y obtener productos realiza un call a crear Cards, con una funcion asincronica, con una promesa a traves de un fetch.


