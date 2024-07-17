
const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];



describe('test carrito', () => {
    
    test('3 elementos', () => {
        expect(carrito).toHaveLength(3);
    });


    test('no vacio', () => {
        expect(carrito).not.toHaveLength(0);
    });

});