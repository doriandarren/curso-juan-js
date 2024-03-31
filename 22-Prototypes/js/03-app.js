

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


//Instanciar 

const juan = new Cliente('Juan', 6000);

console.log(juan.tipoCliente());
console.log(juan.nombreClienteSaldo());
juan.retiraSaldo(1000);
console.log(juan.nombreClienteSaldo());



console.log(juan);




// function Empresa(nombre, saldo, categoria){
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.categoria = categoria;
// }

// const CCJ = new Empresa('Código con Juan', 4000, 'Curso en línea');

// console.log(CCJ);