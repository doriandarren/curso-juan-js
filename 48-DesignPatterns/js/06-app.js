//Mixin

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}


const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre persona: ${this.nombre} email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Nombre: ${this.nombre}`);
    }
}

Object.assign(Persona.prototype, funcionesPersona);


const cliente = new Persona('Pepe', 'correo@correo.com');

console.log(cliente);

cliente.mostrarInformacion();
cliente.mostrarNombre();