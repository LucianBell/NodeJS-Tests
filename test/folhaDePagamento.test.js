"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var globals_1 = require("@jest/globals");
var index_1 = require("../index");
(0, globals_1.test)('Deve retornar a soma das horas extras', function () {
    var esperado = 2500;
    var retornado = (0, index_1.somaHorasExtras)(2000, 500);
    (0, globals_1.expect)(retornado).toBe(esperado);
});
(0, globals_1.test)('Deve retornar o salário após os descontos', function () {
    var esperado = 2200;
    var retornado = (0, index_1.calculaDescontos)(2500, 300);
    (0, globals_1.expect)(retornado).toBe(esperado);
});
