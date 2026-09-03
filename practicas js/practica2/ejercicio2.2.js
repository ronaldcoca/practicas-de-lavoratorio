const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el código (Ej: EST20260645): ', (codigo) => {
  const primeros3 = codigo.slice(0, 3);
  const ultimos4 = codigo.slice(-4);

  console.log('\n--- Resultado ---');
  console.log(`Primeros 3 caracteres: ${primeros3}`);
  console.log(`Últimos 4 caracteres: ${ultimos4}`);

  rl.close();
});