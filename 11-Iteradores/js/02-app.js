// for(let i = 0; i < 10; i++){

//     // if(i === 5){
//     //     console.log(`Este es el 5`);
//     //     break;
//     // }

//     if(i === 5){
//         console.log(`Cinco`);
//         continue;
//     }

//     console.log(`Numero: ${i}`);

// }


const carrito = [
    { nombre: 'Minitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisor', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];

for(let i = 0; i < carrito.length; i++){

    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }

    console.log(carrito[i].nombre);

}