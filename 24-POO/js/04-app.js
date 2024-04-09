class Cliente {

    #nombre;

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
    

}


const mile = new Cliente();
mile.setNombre('Mile');
console.log(mile.getNombre());
