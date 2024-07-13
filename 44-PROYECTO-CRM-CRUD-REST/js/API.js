const url = 'http://localhost:4000/clientes';

// Nuevo Cliente
export const nuevoCliente = async cliente => {

   try {
    
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    window.location.href = 'index.html';

   } catch (error) {
    console.log(error);
   }
}

// Listar clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }

}


// Eliminar
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);   
    }
}


//Obtener cliente por ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;

    } catch (error) {
        console.log(error);
    }
}

export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}