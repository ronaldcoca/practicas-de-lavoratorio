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

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function restar(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function dividir(numero1, numero2) {
  return numero1 / numero2;
}

async function iniciarCalculadora() {
  const entradaNumero1 = await preguntar("Ingrese el primer número: ");
  if (entradaNumero1 === null) {
    return;
  }

  const entradaNumero2 = await preguntar("Ingrese el segundo número: ");
  if (entradaNumero2 === null) {
    return;
  }

  const operador = await preguntar("Ingrese el operador (+, -, *, /): ");
  if (operador === null) {
    return;
  }

  const numero1 = Number(entradaNumero1.trim());
  const numero2 = Number(entradaNumero2.trim());

  if (
    entradaNumero1.trim() === "" ||
    entradaNumero2.trim() === "" ||
    !Number.isFinite(numero1) ||
    !Number.isFinite(numero2)
  ) {
    console.log("Error: debe ingresar dos números válidos.");
    return;
  }

  let resultado;
  const operadorIngresado = operador.trim();

  switch (operadorIngresado) {
    case "+":
      resultado = sumar(numero1, numero2);
      break;
    case "-":
      resultado = restar(numero1, numero2);
      break;
    case "*":
      resultado = multiplicar(numero1, numero2);
      break;
    case "/":
      if (numero2 === 0) {
        console.log("Error: no se puede dividir entre cero.");
        return;
      }
      resultado = dividir(numero1, numero2);
      break;
    default:
      console.log("Error: operador no válido. Use +, -, * o /.");
      return;
  }

  console.log(`Resultado: ${numero1} ${operadorIngresado} ${numero2} = ${resultado}`);
}

iniciarCalculadora()
  .catch((error) => {
    console.error("No se pudo ejecutar la calculadora:", error);
    process.exitCode = 1;
  })
  .finally(() => interfaz.close());
