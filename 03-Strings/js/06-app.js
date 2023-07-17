const producto = 'Monitor 20 Pulgadas';


// .repeat te va a permitir repetir una cadena de texto...

const texto = ' en Promoción'. repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// split dividir string

const actividad = "Estoy aprendiendo Javascript moderno";
console.log(actividad.split(" "));


const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JS #JSModernoCon";
console.log(tweet.split('#'));