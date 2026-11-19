const fs = require('fs');
const path = require('path');

// El archivo usuarios.json se guarda en la raíz del proyecto (una carpeta arriba de /database)
const ARCHIVO_JSON = path.join(__dirname, '..', 'usuarios.json');

// Lee el archivo; si no existe lo crea con un arreglo vacío
function cargarDatos() {
    if (fs.existsSync(ARCHIVO_JSON)) {
        const data = fs.readFileSync(ARCHIVO_JSON, 'utf8');
        return JSON.parse(data);
    } else {
        fs.writeFileSync(ARCHIVO_JSON, JSON.stringify([], null, 2));
        return [];
    }
}

// Escribe el arreglo completo en el archivo (persistencia real)
function guardarDatos(usuarios) {
    fs.writeFileSync(ARCHIVO_JSON, JSON.stringify(usuarios, null, 2));
}

module.exports = { cargarDatos, guardarDatos };
