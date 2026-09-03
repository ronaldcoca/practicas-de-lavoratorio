const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
  console.log('\n--- Resultado ---');
  console.log(`Mayúsculas: ${nombre.toUpperCase()}`);
  console.log(`Minúsculas: ${nombre.toLowerCase()}`);

  rl.close();
});