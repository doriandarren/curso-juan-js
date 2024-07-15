//

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}



class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa = empresa;
    }

}

const persona = new Persona('PEPE', 'pepe@correo.com');
console.log(persona);


const cliente = new Cliente('Jhon', 'cliente@cliente.com', 'CodeMagicians');

console.log(cliente);

