// Ejercicio 3: Sistema de Inventario
let inventario = [
    { nombre: "Laptop", precio: 800, stock: 5 },
    { nombre: "Mouse", precio: 20, stock: 15 },
    { nombre: "Teclado", precio: 45, stock: 8 }
];

function venderProducto(inventario, nombre, cantidad) {
    for (let producto of inventario) {
        if (producto.nombre === nombre) {
            if (producto.stock >= cantidad) {
                producto.stock -= cantidad;
                return "Venta exitosa";
            }
            return "Stock insuficiente";
        }
    }
    return "Producto no encontrado";
}

function aumentarPrecios(inventario) {
    inventario.forEach(producto => {
        producto.precio = Number((producto.precio * 1.10).toFixed(2));
    });
}

console.log(venderProducto(inventario, "Laptop", 2));   // Venta exitosa
console.log(venderProducto(inventario, "Mouse", 50));   // Stock insuficiente
aumentarPrecios(inventario);
console.log("Inventario actualizado:");
console.table(inventario);
