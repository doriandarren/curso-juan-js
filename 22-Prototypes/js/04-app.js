

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}


Cliente.prototype.tipoCliente = function(){
    //console.log(this.saldo);

    let tipo;

    if(this.saldo > 1000){
        tipo = 'Gold';
    }else if(this.saldo > 500){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }

    return tipo;

}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente ${ this.tipoCliente() }`;
}


Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}




function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}


Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;



//Instanciarlo
const chuchu = new Persona('Juan', 5000, 43434343);

console.log(chuchu);

console.log(chuchu.nombreClienteSaldo());


Persona.prototype.mostrarTelefono = function() {
    return `El telefono es: ${this.telefono}`;
}

console.log(chuchu.mostrarTelefono());
