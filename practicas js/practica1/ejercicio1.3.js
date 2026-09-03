const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la base del triángulo: ', (baseInput) => {
  rl.question('Ingrese la altura del triángulo: ', (alturaInput) => {
    const base = parseFloat(baseInput);
    const altura = parseFloat(alturaInput);

    if (isNaN(base) || isNaN(altura)) {
      console.log('Error: Debe ingresar valores numéricos válidos.');
    } else {
      const area = (base * altura) / 2;

      console.log('\n--- Área del Triángulo ---');
      console.log(`Con una base de ${base.toFixed(2)} y altura de ${altura.toFixed(2)}, el área es: ${area.toFixed(2)}`);
    }

    rl.close();
  });
});