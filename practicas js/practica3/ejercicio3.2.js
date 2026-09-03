rl.question('Ingrese el primer número: ', (input1) => {
  rl.question('Ingrese el segundo número: ', (input2) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log('Por favor, ingrese números válidos.');
    } else if (num1 > num2) {
      console.log(`El número mayor es: ${num1}`);
    } else if (num2 > num1) {
      console.log(`El número mayor es: ${num2}`);
    } else {
      console.log('Ambos números son iguales.');
    }

    rl.close();
  });
});