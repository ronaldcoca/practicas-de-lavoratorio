const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la longitud del lado A: ', (ladoAStr) => {
  rl.question('Ingrese la longitud del lado B: ', (ladoBStr) => {
    rl.question('Ingrese la longitud del lado C: ', (ladoCStr) => {
      const a = parseFloat(ladoAStr);
      const b = parseFloat(ladoBStr);
      const c = parseFloat(ladoCStr);

      // Validación del triángulo según la desigualdad triangular[cite: 3]
      const esTrianguloValido = (a + b > c) && (a + c > b) && (b + c > a);

      if (!esTrianguloValido) {
        console.log('\nError: Los lados ingresados no pueden formar un triángulo válido.');
      } else {
        const perimetro = a + b + c;
        let tipo = '';

        // Determinar tipo de igualdad para evaluar con switch[cite: 3]
        let condicion = 0;
        if (a === b && b === c) {
          condicion = 1; // Equilátero[cite: 3]
        } else if (a === b || a === c || b === c) {
          condicion = 2; // Isósceles[cite: 3]
        } else {
          condicion = 3; // Escaleno[cite: 3]
        }

        switch (condicion) {
          case 1:
            tipo = 'Equilátero';
            break;
          case 2:
            tipo = 'Isósceles';
            break;
          case 3:
            tipo = 'Escaleno';
            break;
        }

        console.log('\n--- RESULTADO ---');
        console.log(`Tipo de triángulo: ${tipo}`);
        console.log(`Perímetro: ${perimetro}`);
      }

      rl.close();
    });
  });
});