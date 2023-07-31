const pedientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];


const carrito = [
    { nombre: 'Minitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisor', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];


for(let pendiente of pedientes){
    console.log(pendiente);
}


for(producto of carrito){
    console.log(producto.nombre);
}