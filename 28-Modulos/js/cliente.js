// (function(){
//     console.log('Desde un IIFE');
//     window.nombreCliente = 'Juan';
// })();

export const nombreCliente = 'Juan';

export const ahorro = 200;


export function mostarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}


export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log("Si tiene saldo");
    }else{
        console.log("el Cliente no tien saldo");
    }
}


export class Cliente {
    
    
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }



    mostarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }

}


export default function nuevaFuncion(){
    console.log('Este es el export default');
}
