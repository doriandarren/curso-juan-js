// Switch case

const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Metodo no soportado');
        break;
}

function pagar(){
    console.log('Pagando...');
}