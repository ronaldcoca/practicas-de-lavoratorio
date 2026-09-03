const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1Input) => {
  rl.question('Ingrese el segundo número: ', (num2Input) => {
    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    if (isNaN(num1) || isNaN(num2)) {
      console.log('Error: Debe ingresar valores numéricos válidos.');
    } else {
      const suma = num1 + num2;
      const resta = num1 - num2;
      const multiplicacion = num1 * num2;
      const division = num1 / num2;
      const modulo = num1 % num2;

      console.log('\n--- Operaciones Aritméticas ---');
      console.log(`Suma: ${num1} + ${num2} = ${suma.toFixed(2)}`);
      console.log(`Resta: ${num1} - ${num2} = ${resta.toFixed(2)}`);
      console.log(`Multiplicación: ${num1} * ${num2} = ${multiplicacion.toFixed(2)}`);
      console.log(`División: ${num1} / ${num2} = ${division.toFixed(2)}`);
      console.log(`Módulo: ${num1} % ${num2} = ${modulo.toFixed(2)}`);
    }

    rl.close();
  });
});