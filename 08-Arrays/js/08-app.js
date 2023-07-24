const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}



const { nombre } = producto;

console.log(nombre);

// Destructuring con Array

const numeros = [10,20,30,40,50];

//const arraglo[0] = "hola";

const [primero] = numeros;
console.log(primero);


const [ , segundo] = numeros;
console.log(segundo);


const [ , , , , quinto] = numeros;
console.log(quinto);

const [ p, ...q] = numeros;
console.log(q);