let DB;

document.addEventListener('DOMContentLoaded', () => {
    
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);

});

function crmDB(){
    //Crear base datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //Si hay error
    crmDB.onerror = function(){
        console.log('Hubo un error a la hora de crear la BD');
    }

    // si se crea bien

    crmDB.onsuccess = function(){
        console.log('Base de datos Creada!');

        DB = crmDB.result;
    }


    // Configuración
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creadas!');

    }


}



function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('Transaccion completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 12344555,
        nombre: 'Manuel',
        email: 'info@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);

}