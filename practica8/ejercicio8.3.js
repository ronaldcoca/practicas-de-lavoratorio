"use strict";

function sumarElementos(arreglo) {
  return arreglo.reduce((suma, numero) => suma + numero, 0);
}

function calcularPromedio(arreglo) {
  if (arreglo.length === 0) {
    return 0;
  }

  return sumarElementos(arreglo) / arreglo.length;
}

function encontrarMayor(arreglo) {
  if (arreglo.length === 0) {
    return undefined;
  }

  return Math.max(...arreglo);
}

const numeros = [8, 15, 3, 22, 10, 6];

console.log(`Arreglo: ${numeros.join(", ")}`);
console.log(`Suma: ${sumarElementos(numeros)}`);
console.log(`Promedio: ${calcularPromedio(numeros)}`);
console.log(`Número mayor: ${encontrarMayor(numeros)}`);
