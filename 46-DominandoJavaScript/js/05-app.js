
function persona(el1, el2) {
    console.log(`El nombre es: ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Pep'
}

const musciaFavorita = ['Heavy Metal', 'Rock'];


persona.call(informacion, musciaFavorita[0], musciaFavorita[1]);

persona.apply(informacion, musciaFavorita);


const nuevaFn = persona.bind(informacion, musciaFavorita[0], musciaFavorita[1]);
nuevaFn();