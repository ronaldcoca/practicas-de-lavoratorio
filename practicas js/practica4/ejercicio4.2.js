const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1) => {
  rl.question('Ingrese el segundo número: ', (num2) => {
    rl.question('Ingrese el operador (+, -, *, /): ', (operador) => {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      switch (operador) {
        case '+':
          console.log(`Resultado: ${n1 + n2}`);
          break;
        case '-':
          console.log(`Resultado: ${n1 - n2}`);
          break;
        case '*':
          console.log(`Resultado: ${n1 * n2}`);
          break;
        case '/':
          if (n2 === 0) {
            console.log('Error: No se puede dividir entre cero.');
          } else {
            console.log(`Resultado: ${n1 / n2}`);
          }
          break;
        default:
          console.log('Error: Operador no válido.');
      }

      rl.close();
    });
  });
});