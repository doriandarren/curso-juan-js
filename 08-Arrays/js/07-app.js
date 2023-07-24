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

const producto4 = {
    nombre: 'Móvil 2',
    precio: 600
}



// push agrega al final de un arraglo
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);



const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);
console.table(carrito);



// Eliminar ultimo elemento de un arreglo...
// carrito.pop();
// console.table(carrito);


// // Eliminar del inicio del array
// carrito.shift();
// console.table(carrito);


// Eliminar en la posición 1, elimina 1 
 carrito.splice(1, 1);
 console.table(carrito);

