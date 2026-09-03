const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su año de nacimiento: ', (anioNacimientoInput) => {
  const anioNacimiento = parseInt(anioNacimientoInput, 10);
  const anioActual = new Date().getFullYear();

  if (isNaN(anioNacimiento)) {
    console.log('Error: Debe ingresar un año válido.');
  } else {
    const edad = anioActual - anioNacimiento;

    console.log('\n--- Resultado ---');
    console.log(`Año actual: ${anioActual}`);
    console.log(`Su edad es: ${edad} años`);
  }

  rl.close();
});