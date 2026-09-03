const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un número de referencia de 8 dígitos: ', (numeroInput) => {
  const numero = parseInt(numeroInput, 10);

  if (isNaN(numero)) {
    console.log('Error: Debe ingresar un valor numérico válido.');
  } else {
    const texto = numero.toString();
    const primeros4 = texto.slice(0, 4);

    console.log('\n--- Resultado ---');
    console.log(`Número convertido a texto: "${texto}"`);
    console.log(`Primeros 4 dígitos: ${primeros4}`);
  }

  rl.close();
});