const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la primera calificación: ', (cal1Input) => {
  rl.question('Ingrese la segunda calificación: ', (cal2Input) => {
    rl.question('Ingrese la tercera calificación: ', (cal3Input) => {
      const cal1 = parseFloat(cal1Input);
      const cal2 = parseFloat(cal2Input);
      const cal3 = parseFloat(cal3Input);

      if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        console.log('Error: Debe ingresar valores numéricos válidos.');
      } else {
        const promedio = (cal1 + cal2 + cal3) / 3;

        console.log('\n--- Promedio de Calificaciones ---');
        console.log(`Calificaciones: ${cal1.toFixed(2)}, ${cal2.toFixed(2)}, ${cal3.toFixed(2)}`);
        console.log(`Promedio final: ${promedio.toFixed(2)}`);
      }

      rl.close();
    });
  });
});