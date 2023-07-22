// const meses = ['Enero', 'Febrero', 'Marzo'];

// //meses[3] = 'Abril';

// // agregar al final de arreglo

// meses.push('Abril');
// meses.push('Mayo');


// console.table(meses);


const carrito = [];

// definir un producto
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}


const producto2 = {
    nombre: 'Móvil',
    precio: 800
}



// push agrega al final de un arraglo
carrito.push(producto);
carrito.push(producto2);



const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);



console.table(carrito);