const producto = '       Monitor 20 pulgadas        ';

console.log(producto);
console.log(producto.length);

// Eliminar del incio...
console.log(producto.trimStart());
console.log(producto.trimEnd());

console.log( producto.trimStart().trimEnd() );

console.log(producto.trim());