const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

const interfaz = readline.createInterface({ input: stdin, output: stdout });

async function sumarNumeros() {
    let suma = 0;
    let cantidad = 0;

    try {
        const lineas = interfaz[Symbol.asyncIterator]();

        while (suma <= 100) {
            stdout.write("Ingrese un número: ");
            const { value: entrada, done } = await lineas.next();

            if (done) {
                break;
            }

            const numero = Number(entrada);

            if (entrada.trim() === "" || !Number.isFinite(numero)) {
                console.log("Ingrese un número válido.");
                continue;
            }

            suma += numero;
            cantidad++;
        }

        console.log(`La suma total es ${suma}. Se ingresaron ${cantidad} números.`);
    } finally {
        interfaz.close();
    }
}

sumarNumeros();