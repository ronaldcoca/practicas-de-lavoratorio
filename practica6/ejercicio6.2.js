const readline = require("node:readline");

const lector = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

lector.question("Ingrese un número N: ", (respuesta) => {
	const limite = Number.parseInt(respuesta, 10);
	let sumaPares = 0;
	let sumaImpares = 0;

	for (let numero = 1; numero <= limite; numero++) {
		if (numero % 2 === 0) {
			sumaPares += numero;
		} else {
			sumaImpares += numero;
		}
	}

	console.log(`Suma de números pares: ${sumaPares}`);
	console.log(`Suma de números impares: ${sumaImpares}`);
	lector.close();
});
