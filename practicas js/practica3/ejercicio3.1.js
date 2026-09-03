rl.question('Ingrese un número: ', (input) => {
  const numero = parseFloat(input);

  if (isNaN(numero)) {
    console.log('Por favor, ingrese un número válido.');
  } else if (numero > 0) {
    console.log('El número es positivo.');
  } else if (numero < 0) {
    console.log('El número es negativo.');
  } else {
    console.log('El número es cero.');
  }

  rl.close();
});