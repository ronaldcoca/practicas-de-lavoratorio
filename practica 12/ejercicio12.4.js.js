const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Tipos de vehículo: 1=Moto, 2=Auto, 3=Camioneta, 4=Bus');

rl.question('Ingrese el tipo de vehículo (1-4): ', (tipoStr) => {
  rl.question('Ingrese la cantidad de horas estacionado: ', (horasStr) => {
    const tipo = parseInt(tipoStr);
    const horas = parseFloat(horasStr);

    let tarifaPorHora = 0;
    let nombreVehiculo = '';
    let opcionValida = true;

    // Asignación de tarifa según tipo de vehículo[cite: 4]
    switch (tipo) {
      case 1:
        nombreVehiculo = 'Moto';
        tarifaPorHora = 1.00;
        break;
      case 2:
        nombreVehiculo = 'Auto';
        tarifaPorHora = 2.00;
        break;
      case 3:
        nombreVehiculo = 'Camioneta';
        tarifaPorHora = 3.00;
        break;
      case 4:
        nombreVehiculo = 'Bus';
        tarifaPorHora = 5.00;
        break;
      default:
        opcionValida = false;
        break;
    }

    if (!opcionValida || isNaN(horas) || horas <= 0) {
      console.log('\nError: El tipo de vehículo o la cantidad de horas no son válidos.');
    } else {
      const subtotal = tarifaPorHora * horas;
      let descuento = 0;

      // Aplicar 20% de descuento si estuvo más de 5 horas[cite: 4]
      if (horas > 5) {
        descuento = subtotal * 0.20;
      }

      const total = subtotal - descuento;

      console.log('\n--- FACTURA DE ESTACIONAMIENTO ---');
      console.log(`Tipo de vehículo: ${nombreVehiculo}`);
      console.log(`Horas estacionado: ${horas}`);
      console.log(`Tarifa por hora: $${tarifaPorHora.toFixed(2)}`);
      console.log(`Subtotal: $${subtotal.toFixed(2)}`);
      console.log(`Descuento (20%): $${descuento.toFixed(2)}`);
      console.log(`Total a pagar: $${total.toFixed(2)}`);
    }

    rl.close();
  });
});