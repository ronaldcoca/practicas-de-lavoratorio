const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pedirPrecios(cantidad, indice = 0, arreglo = [], callback) {
    if (indice >= cantidad) {
        return callback(arreglo);
    }
    rl.question(`Ingrese el precio del producto ${indice + 1}: `, (precio) => {
        arreglo.push(parseFloat(precio));
        pedirPrecios(cantidad, indice + 1, arreglo, callback);
    });
}

rl.question("¿Cuántos productos va a registrar? ", (num) => {
    const cantidad = parseInt(num);
    pedirPrecios(cantidad, 0, [], (precios) => {
        let sumaTotal = 0;
        console.log("\n--- Precios mayores a $15.00 ---");
        precios.forEach((precio) => {
            if (precio > 15.00) {
                console.log(`$${precio.toFixed(2)}`);
            }
            sumaTotal += precio;
        });
        console.log(`Suma total de la compra: $${sumaTotal.toFixed(2)}`);
        rl.close();
    });
});