const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
  rl.question('Ingrese su apellido: ', (apellido) => {
    rl.question('Ingrese el año de ingreso: ', (anioIngresoInput) => {
      rl.question('Ingrese su promedio: ', (promedioInput) => {
        const promedio = parseFloat(promedioInput);

        if (isNaN(promedio)) {
          console.log('Error: Debe ingresar un promedio válido.');
        } else {
          const nombreMayus = nombre.toUpperCase();
          const apellidoMayus = apellido.toUpperCase();
          const tresLetrasApellido = apellido.slice(0, 3);
          const ultimosDosAnio = anioIngresoInput.trim().slice(-2);

          console.log('\n--- Información del Estudiante ---');
          console.log(`Nombre completo: ${nombreMayus} ${apellidoMayus}`);
          console.log(`Primeras 3 letras del apellido: ${tresLetrasApellido}`);
          console.log(`Últimos 2 dígitos del año de ingreso: ${ultimosDosAnio}`);
          console.log(`Promedio: ${promedio.toFixed(2)}`);
        }

        rl.close();
      });
    });
  });
});