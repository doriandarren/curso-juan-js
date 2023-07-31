// foreach


const pedientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

pedientes.forEach((pendiente, indice)=>{
    console.log(`${indice} : ${pendiente}`);

});


const carrito = [
    { nombre: 'Minitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisor', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];

const nuevoArreglo = carrito.forEach( producto => producto.nombre );

const nuevoArreglo2 = carrito.map( producto => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);