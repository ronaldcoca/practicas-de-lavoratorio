rl.question('Ingrese su edad: ', (input) => {
  const edad = parseInt(input, 10);

  if (isNaN(edad) || edad < 0) {
    console.log('Por favor, ingrese una edad válida.');
  } else if (edad >= 0 && edad <= 12) {
    console.log('Categoría: Niño');
  } else if (edad >= 13 && edad <= 17) {
    console.log('Categoría: Adolescente');
  } else if (edad >= 18 && edad <= 64) {
    console.log('Categoría: Adulto');
  } else {
    console.log('Categoría: Adulto mayor');
  }

  rl.close();
});