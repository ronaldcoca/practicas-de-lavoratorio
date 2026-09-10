const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una calificación numérica (0-100): ', (respuesta) => {
  const calificacion = parseFloat(respuesta);

  if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
    console.log('Calificación fuera de rango o inválida.');
  } else {
    // Math.floor(calificacion / 10) para obtener el rango
    const rango = Math.floor(calificacion / 10);

    switch (rango) {
      case 10:
      case 9:
        console.log('Calificación: A');
        break;
      case 8:
        console.log('Calificación: B');
        break;
      case 7:
        console.log('Calificación: C');
        break;
      case 6:
        console.log('Calificación: D');
        break;
      default:
        console.log('Calificación: F');
    }
  }

  rl.close();
});