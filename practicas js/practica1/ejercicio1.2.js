const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la temperatura en Fahrenheit (°F): ', (fahrenheitInput) => {
  const fahrenheit = parseFloat(fahrenheitInput);

  if (isNaN(fahrenheit)) {
    console.log('Error: Debe ingresar un valor numérico válido.');
  } else {
    const celsius = (fahrenheit - 32) * (5 / 9);

    console.log('\n--- Conversión de Temperatura ---');
    console.log(`Temperatura en Celsius: ${celsius.toFixed(2)} °C`);
  }

  rl.close();
});