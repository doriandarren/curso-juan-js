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

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];





console.table(resultado);
console.table(carrito);