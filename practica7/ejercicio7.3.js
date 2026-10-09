const nombres = ["Ana", "Carlos", "Isabella", "Luis", "Valentina"];
let nombreMasLargo = "";

for (const nombre of nombres) {
    console.log(`${nombre}: ${nombre.length} letras`);

    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
}

console.log(`El nombre más largo es ${nombreMasLargo}.`);