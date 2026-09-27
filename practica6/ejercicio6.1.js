const readline = require("node:readline");

const lector = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

lector.question("Ingrese un número: ", (respuesta) => {
	const numero = Number(respuesta);

	for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
		console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
	}

	lector.close();
});
