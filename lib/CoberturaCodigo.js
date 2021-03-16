module.exports = class CoberturaCodigo {
    MenorMaior(array) {
        var menor = Number.MAX_VALUE;
        var maior = Number.MIN_VALUE;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element < menor) {
                menor = element
            }
            else{
                maior = element
            }
        }
        return [menor, maior]
    }
    ParImpar(array) {
        var par = 0;
        var impar = 0;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element % 2 == 0) {
                par++
            }
            if (element % 2 != 0) {
                impar++
            }
        }
        return [par, impar]
    }
}