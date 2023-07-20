const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
        medida: '1m'
        },
        fabricacion: {
            pais: "Rusia"
        }

    }
}


const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais} } } = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);