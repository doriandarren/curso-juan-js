
const cliente = {
    nombre: "Milena",
    balance: 500
}



describe('test obejto', () => {
    
    test('es premiun', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });


    test('es Milena', () => {
        expect(cliente.nombre).toBe('Milena');
    });

    test('no es Milena', () => {
        expect(cliente.nombre).not.toBe('MMMA');
    });

});