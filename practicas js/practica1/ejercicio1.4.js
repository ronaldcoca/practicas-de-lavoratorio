const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un valor inicial: ', (valorInput) => {
  let valor = parseFloat(valorInput);

  if (isNaN(valor)) {
    console.log('Error: Debe ingresar un valor numérico válido.');
  } else {
    console.log('\n--- Operadores de Asignación ---');
    console.log(`Valor inicial: ${valor.toFixed(2)}`);

    valor += 10;
    console.log(`Después de += 10: ${valor.toFixed(2)}`);

    valor -= 5;
    console.log(`Después de -= 5: ${valor.toFixed(2)}`);

    valor *= 2;
    console.log(`Después de *= 2: ${valor.toFixed(2)}`);
  }

  rl.close();
});