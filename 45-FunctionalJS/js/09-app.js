
const suma = (a,b,c) => a + b + c;



const partial = (a) => (b,c) => suma(a,b,c);


const primerNumer = partial(5);
const resultado = primerNumer(4,3);
console.log(resultado);
console.log(suma(1,2,3));




const partial2 = a => b => c => suma(a,b,c);

// Es igual que esto:
// const primerN = partial2(5);
// const segungoN = primerN(4);
// const resultado2 = segungoN(3);

//Esto es igual a lo comentado arriba
const resultado2 = partial2(5)(4)(3);


console.log(resultado2);
