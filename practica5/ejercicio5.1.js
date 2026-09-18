const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
  rl.question('Ingrese su calificación final (0-100): ', (calificacionStr) => {
    rl.question('¿Entregó todos los trabajos? (si/no): ', (entregoTrabajos) => {
      const calificacionOriginal = parseFloat(calificacionStr);
      let bonificacion = 0;
      const entregoTodo = entregoTrabajos.trim().toLowerCase() === 'si';

      // Validación e incremento según las condiciones requeridas[cite: 2]
      if (calificacionOriginal >= 90 && entregoTodo) {
        bonificacion = 5;
      } else if (calificacionOriginal >= 70 && calificacionOriginal < 90 && entregoTodo) {
        bonificacion = 3;
      } else {
        bonificacion = 0;
      }

      // Cálculo de la calificación final asegurando que no supere 100[cite: 2]
      let calificacionFinal = calificacionOriginal + bonificacion;
      if (calificacionFinal > 100) {
        calificacionFinal = 100;
      }

      console.log('\n--- RESULTADO ---');
      console.log(`Nombre: ${nombre}`);
      console.log(`Calificación original: ${calificacionOriginal}`);
      console.log(`Bonificación aplicada: +${bonificacion} puntos`);
      console.log(`Calificación final: ${calificacionFinal}`);

      rl.close();
    });
  });
});