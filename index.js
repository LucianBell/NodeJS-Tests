"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var somaHorasExtras = function (salario, valorHorasExtras) {
    return salario + valorHorasExtras;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var calculaDescontos = function (salario, descontos) { return salario - descontos; };
var verfiqueSe = function (valor) {
    var assercoes = {
        ehExatamenteIgualA: function (esperado) {
            if (valor !== esperado) {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw {};
            }
        }
    };
    return assercoes;
};
var teste = function (titulo, funcaoTeste) {
    try {
        funcaoTeste();
        console.log("".concat(titulo, " passou."));
    }
    catch (error) {
        console.error("error: ".concat(titulo, " n\u00E3o passou"));
    }
};
teste('somaHorasExtras', function () {
    var esperado = 2500;
    var retornado = somaHorasExtras(2000, 500);
    var resultado = verfiqueSe(retornado);
    resultado.ehExatamenteIgualA(esperado);
});
teste('calculaDesconto', function () {
    var esperado = 2200;
    var retornado = calculaDescontos(2500, 300);
    var resultado = verfiqueSe(retornado);
    resultado.ehExatamenteIgualA(esperado);
});
// teste('somaHorasExtras', 2500, somaHorasExtras(2000, 500))
//
// teste('calculaDesconto', 2200, calculaDescontos(2500, 300))
