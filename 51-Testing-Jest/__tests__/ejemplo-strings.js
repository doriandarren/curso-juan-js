

const password = "123456";


describe('Validar 6 caracteres', () => {
    
    test('password tenga 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });


    test('no vacio', () => {
        expect(password).not.toHaveLength(0);
    });
});



