import { AplicarDescuento, FormatearAMiles } from '../ModificaPrecio'

describe('Suite de pruebas para ModificarPrecio.js', () => {
    it('Test para AplicarDescuento si es palindromo', () => {
        expect(AplicarDescuento(true, 100000)).toBe('50,000');
    })

    it('Test para AplicarDescuento si no palindromo', () => {
        expect(AplicarDescuento(false, 250000)).toBe('250,000');
    })

    it('Test para formatear numero a miles', () => {
        expect(FormatearAMiles(99990)).toBe('99,990');
    })
});