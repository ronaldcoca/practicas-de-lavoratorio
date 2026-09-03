const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el salario base ($): ', (salarioInput) => {
  const salarioBase = parseFloat(salarioInput);

  if (isNaN(salarioBase)) {
    console.log('Error: Debe ingresar un valor numérico válido.');
  } else {
    const bonificacion = salarioBase * 0.15;
    const salarioTotal = salarioBase + bonificacion;

    console.log('\n--- Detalle del Salario ---');
    console.log(`Salario base: $${salarioBase.toFixed(2)}`);
    console.log(`Bonificación (15%): $${bonificacion.toFixed(2)}`);
    console.log(`Salario total: $${salarioTotal.toFixed(2)}`);
  }

  rl.close();
});