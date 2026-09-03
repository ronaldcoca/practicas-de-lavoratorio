const fechaActual = new Date();

const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1; // Los meses inician en 0
const anio = fechaActual.getFullYear();

console.log('--- Fecha Actual ---');
console.log(`Fecha personalizada: ${dia}/${mes}/${anio}`);