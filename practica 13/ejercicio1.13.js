const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pedirEdades(cantidad, indice = 0, arreglo = [], callback) {
    if (indice >= cantidad) {
        return callback(arreglo);
    }
    rl.question(`Ingrese la edad de la persona ${indice + 1}: `, (edad) => {
        arreglo.push(parseInt(edad));
        pedirEdades(cantidad, indice + 1, arreglo, callback);
    });
}

rl.question("¿Cuántas personas va a registrar? ", (num) => {
    const cantidad = parseInt(num);
    pedirEdades(cantidad, 0, [], (edades) => {
        let suma = 0;
        console.log("\n--- Resultados ---");
        edades.forEach((edad, i) => {
            console.log(`Persona ${i + 1}: ${edad} años`);
            suma += edad;
        });
        const promedio = suma / edades.length;
        console.log(`Promedio de edad: ${promedio.toFixed(2)}`);
        rl.close();
    });
});