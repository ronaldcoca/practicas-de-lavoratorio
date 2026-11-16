"use strict";

const readline = require("node:readline/promises");
const { stdin: entrada, stdout: salida } = require("node:process");

const interfaz = readline.createInterface({ input: entrada, output: salida });
const lineas = interfaz[Symbol.asyncIterator]();

async function preguntar(mensaje) {
  salida.write(mensaje);
  const respuesta = await lineas.next();
  return respuesta.done ? null : respuesta.value;
}

function esPar(numero) {
  return numero % 2 === 0;
}

function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}

async function iniciarValidacion() {
  const entradaNumero = await preguntar("Ingrese un número entero: ");
  if (entradaNumero === null) {
    return;
  }

  const numero = Number(entradaNumero.trim());

  if (entradaNumero.trim() === "" || !Number.isSafeInteger(numero)) {
    console.log("Error: debe ingresar un número entero válido.");
    return;
  }

  const paridad = esPar(numero) ? "par" : "impar";
  const resultadoPrimo = esPrimo(numero) ? "es primo" : "no es primo";

  console.log(`El número ${numero} es ${paridad} y ${resultadoPrimo}.`);
}

iniciarValidacion()
  .catch((error) => {
    console.error("No se pudo ejecutar la validación:", error);
    process.exitCode = 1;
  })
  .finally(() => interfaz.close());
