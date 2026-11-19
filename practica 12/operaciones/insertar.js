const { guardarDatos } = require('../database/database');

function insertarUsuario(rl, usuarios, callback) {
    rl.question('Ingrese el nombre del usuario: ', (nombre) => {
        rl.question('Ingrese el apellido del usuario: ', (apellido) => {
            rl.question('Ingrese la edad del usuario: ', (edad) => {
                rl.question('Ingrese el correo del usuario: ', (correo) => {

                    // Validación: correo único sin importar mayúsculas/minúsculas
                    const correoExiste = usuarios.some(
                        u => u.correo.toLowerCase() === correo.toLowerCase()
                    );

                    if (correoExiste) {
                        console.log(`\nERROR: El correo ${correo} ya existe.`);
                    } else {
                        const nuevoUsuario = { nombre, apellido, edad: parseInt(edad), correo };
                        usuarios.push(nuevoUsuario);
                        guardarDatos(usuarios);
                        console.log('\nUsuario registrado y guardado.');
                    }

                    callback();
                });
            });
        });
    });
}

module.exports = insertarUsuario;
