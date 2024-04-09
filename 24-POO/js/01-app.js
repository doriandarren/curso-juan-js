// /**
//  * Funciones
//  */

// function funcion(num1, num2){    // 3, 250
//     // Algo
//     console.log("Hola", num1);

//     let resultado = num1 + num2;  // 3 + 250

//     return resultado; // 253
// }


// funcion();

// const resul1 = funcion(4, 5); //ok -> 9
// const resul2 = funcion(3, 250); //ok -> 253





// /**
//  * Classes
//  */

// class Persona {
    

//     //variables
//     nombre;
//     apellido;
    
//     //Contructor
//     constructor(){

//     }


//     //funciones
//     saludar(palabra){
//         return "Hola" + palabra;
//     }

//     volar(){
//         return "Lija las patas";
//     }

//     adios(){
//         return "Adios";
//     }



// }




// const dilan = new Persona();
// dilan.nombre = 'Dilan';
// dilan.saludar("mundo");



// const milena = new Persona();
// mile.nombre = 'Milena';
// mile.saludar("Que pasAAAA marico!!! QUe QUe qUE");


// console.log(dilan);























/**
 * Classes
 */


/**
 * Classes
 */

class Cliente {

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }


}


const mile = new Cliente('Pepe', 400);
console.log(mile.mostrarInformacion());

console.log(Cliente.bienvenida);




const Cliente2 = class {

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    

}

const juan2 = new Cliente2('Milena', 5000);
console.log(juan2.mostrarInformacion());
console.log(juan2);

