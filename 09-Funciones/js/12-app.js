const carrito = [
    { nombre: 'Minitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisor', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];


// Mapeo Crea un nuevo arreglo 
const nuevoArreglo = carrito.map( producto =>  `${producto.nombre} - Precio: ${producto.precio}`);


carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));


console.log(nuevoArreglo);
