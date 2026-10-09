const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

const interfaz = readline.createInterface({ input: stdin, output: stdout });

async function mostrarMenu() {
    let opcion;

    try {
        const lineas = interfaz[Symbol.asyncIterator]();

        do {
            stdout.write(
                "\nMenú interactivo\n1) Saludar\n2) Mostrar fecha actual\n3) Salir\nElija una opción: "
            );
            const { value: entrada, done } = await lineas.next();

            if (done) {
                break;
            }

            opcion = entrada.trim();

            switch (opcion) {
                case "1":
                    console.log("¡Hola!");
                    break;
                case "2":
                    console.log(`Fecha y hora actual: ${new Date().toLocaleString()}`);
                    break;
                case "3":
                    console.log("Saliendo del menú.");
                    break;
                default:
                    console.log("Opción no válida. Intente de nuevo.");
            }
        } while (opcion !== "3");
    } finally {
        interfaz.close();
    }
}

mostrarMenu();
