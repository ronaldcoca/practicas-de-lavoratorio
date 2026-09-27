const readline = require("node:readline");

const lector = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

lector.question("¿Cuántos términos de Fibonacci desea ver? ", (respuesta) => {
	const cantidad = Number.parseInt(respuesta, 10);
	let numeroAnterior = 0;
	let numeroActual = 1;
	const serie = [];

	for (let termino = 0; termino < cantidad; termino++) {
		serie.push(numeroAnterior);
		const siguienteNumero = numeroAnterior + numeroActual;
		numeroAnterior = numeroActual;
		numeroActual = siguienteNumero;
	}

	console.log(serie.join(", "));
	lector.close();
});
