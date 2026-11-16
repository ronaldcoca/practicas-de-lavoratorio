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

function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitACelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

async function iniciarConversion() {
  const tipoConversion = await preguntar(
    "Seleccione la conversión (1: Celsius a Fahrenheit, 2: Fahrenheit a Celsius): "
  );
  if (tipoConversion === null) {
    return;
  }

  const entradaTemperatura = await preguntar("Ingrese la temperatura: ");
  if (entradaTemperatura === null) {
    return;
  }

  const temperatura = Number(entradaTemperatura.trim());

  if (
    entradaTemperatura.trim() === "" ||
    !Number.isFinite(temperatura)
  ) {
    console.log("Error: ingrese una temperatura válida.");
    return;
  }

  let resultado;
  let unidadResultado;

  switch (tipoConversion.trim()) {
    case "1":
      resultado = celsiusAFahrenheit(temperatura);
      unidadResultado = "°F";
      break;
    case "2":
      resultado = fahrenheitACelsius(temperatura);
      unidadResultado = "°C";
      break;
    default:
      console.log("Error: seleccione 1 o 2 para el tipo de conversión.");
      return;
  }

  console.log(`Resultado: ${resultado.toFixed(2)} ${unidadResultado}`);
}

iniciarConversion()
  .catch((error) => {
    console.error("No se pudo ejecutar la conversión:", error);
    process.exitCode = 1;
  })
  .finally(() => interfaz.close());
