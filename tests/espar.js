const esPar = require('../match');

// Prueba 1: Es par?
if (esPar(4) !== true) {
  console.error("Error: 4 debería ser par");
  process.exit(1);
}

// Prueba 2: Es impar?
if (esPar(7) !== false) {
  console.error("Error: 7 no debería ser par");
  process.exit(1);
}

// Prueba 3: ES Cero?
if (esPar(0) !== true) {
  console.error("Error: 0 debería ser par");
  process.exit(1);
}

console.log("los tests pasaron OK");
process.exit(0);