// Ejercicio 1: El Carrito de Compras
let carrito = [
    { nombre: "Jabón", precio: 12, cantidad: 10 },
    { nombre: "Azúcar", precio: 8, cantidad: 10 },
    { nombre: "Aceite", precio: 7, cantidad: 10 }
];

function calcularTotal(carrito) {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    console.log("Total a pagar: " + total);
    return total;
}

function buscarProducto(carrito, nombreProducto) {
    for (let producto of carrito) {
        if (producto.nombre === nombreProducto) {
            return `El precio de ${producto.nombre} es ${producto.precio}`;
        }
    }
    return "Producto no encontrado";
}

calcularTotal(carrito);
console.log(buscarProducto(carrito, "Azúcar"));   // existe
console.log(buscarProducto(carrito, "Leche"));    // no existe
