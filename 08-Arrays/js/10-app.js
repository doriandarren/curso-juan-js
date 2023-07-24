
const carrito = [
    { nombre: 'Minitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisor', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];


// Mapeo Crea un nuevo arreglo 
const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
});


const nuevoArraglo2 = carrito.forEach( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArreglo);
console.log(nuevoArraglo2);
