const assert = require('assert');
const esPar = require('../match');

describe('Módulo match', () => {
    describe('Función esPar', () => {
        
        it('El numero 4 es par', () => {
            assert.strictEqual(esPar(4), true);
        });

        it('El numero 7 es impar', () => {
            assert.strictEqual(esPar(7), false);
        });

        it('El cero es par', () => {
            assert.strictEqual(esPar(0), true);
        });

    });
});