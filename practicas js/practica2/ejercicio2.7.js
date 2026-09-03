const fechaActual = new Date();

const horas = String(fechaActual.getHours()).padStart(2, '0');
const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
const segundos = String(fechaActual.getSeconds()).padStart(2, '0');

console.log('--- Hora Actual ---');
console.log(`Formato HH:MM:SS -> ${horas}:${minutos}:${segundos}`);