const readline = require("node:readline");

const lector = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

lector.question("Ingrese la cantidad de filas: ", (respuesta) => {
	const cantidadFilas = Number.parseInt(respuesta, 10);

	for (let fila = 1; fila <= cantidadFilas; fila++) {
		let linea = "";
		for (let asterisco = 1; asterisco <= fila; asterisco++) {
			linea += "*";
		}
		console.log(linea);
	}

	lector.close();
});
