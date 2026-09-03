rl.question('Ingrese la calificación (0-100): ', (input) => {
  const calificacion = parseFloat(input);

  if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
    console.log('Por favor, ingrese una calificación válida entre 0 y 100.');
  } else if (calificacion >= 60) {
    console.log('Aprobó');
  } else {
    console.log('Reprobó');
  }

  rl.close();
});