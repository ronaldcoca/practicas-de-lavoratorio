const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el precio original del producto ($): ', (precioInput) => {
  const precio = parseFloat(precioInput);

  if (isNaN(precio)) {
    console.log('Error: Debe ingresar un valor numérico válido.');
  } else {
    const descuento = precio * 0.20;
    const precioFinal = precio - descuento;

    console.log('\n--- Detalle del Descuento ---');
    console.log(`Precio original: $${precio.toFixed(2)}`);
    console.log(`Descuento (20%): $${descuento.toFixed(2)}`);
    console.log(`Precio final a pagar: $${precioFinal.toFixed(2)}`);
  }

  rl.close();
});