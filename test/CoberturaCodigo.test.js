const CoberturaCodigo = require('../lib/CoberturaCodigo')

const Cobertura = new CoberturaCodigo();

describe('Maior e menor', () => {
    test('Maior e menor', () => {
        const calc = Cobertura.MenorMaior([1,2,3,4,5]);
        console.log(calc)
        expect(calc[0]).toBe(1);
        expect(calc[1]).toBe(5);
    })
    test('Par e Impar',()=>{
        const calc = Cobertura.ParImpar([1,2,3,4,5])
        console.log(calc)
        expect(calc[0]).toBe(2);
        expect(calc[1]).toBe(3);
    })
})