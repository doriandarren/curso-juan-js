

const aplicarDescuento = new Promise((resolve, reject) => {

    const descuento = true;

    if(descuento){

        resolve('Descuento Aplicado');

    }else{

        reject('No se pudo aplciar el descuento');

    }

});


aplicarDescuento
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error =>{
        console.log(error)
    })

//hay 3 valores posibles...
// fulfilled - el promise se cumplió
// reject - el promise NO se cumplió
// pending - no se ha cumplido y tampoco fue rechazado