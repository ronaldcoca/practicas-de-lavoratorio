const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== MENÚ DE CONVERSIONES ===');
console.log('1) Convertir de Celsius a Fahrenheit');
console.log('2) Convertir de Fahrenheit a Celsius');
console.log('3) Salir');

rl.question('Seleccione una opción (1-3): ', (opcion) => {
  const op = parseInt(opcion);

  switch (op) {
    case 1:
      rl.question('Ingrese la temperatura en °C: ', (celsius) => {
        const c = parseFloat(celsius);
        const f = (c * 9 / 5) + 32;
        console.log(`${c}°C equivalen a ${f.toFixed(2)}°F`);
        rl.close();
      });
      break;
    case 2:
      rl.question('Ingrese la temperatura en °F: ', (fahrenheit) => {
        const f = parseFloat(fahrenheit);
        const c = (f - 32) * 5 / 9;
        console.log(`${f}°F equivalen a ${c.toFixed(2)}°C`);
        rl.close();
      });
      break;
    case 3:
      console.log('Saliendo del programa...');
      rl.close();
      break;
    default:
      console.log('Opción no válida.');
      rl.close();
  }
});