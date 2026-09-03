const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su peso en kilogramos (kg): ', (pesoInput) => {
  rl.question('Ingrese su altura en metros (m): ', (alturaMInput) => {
    const peso = parseFloat(pesoInput);
    const alturaM = parseFloat(alturaMInput);

    if (isNaN(peso) || isNaN(alturaM)) {
      console.log('Error: Debe ingresar valores numéricos válidos.');
    } else {
      const imc = peso / (alturaM * alturaM);

      console.log('\n--- Índice de Masa Corporal (IMC) ---');
      console.log(`Peso: ${peso.toFixed(2)} kg`);
      console.log(`Altura: ${alturaM.toFixed(2)} m`);
      console.log(`IMC: ${imc.toFixed(2)}`);
    }

    rl.close();
  });
});