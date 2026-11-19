// Ejercicio 2: La Agenda de Contactos
let agenda = [
    { nombre: "Bryan", telefono: 5764143, correo: "Bryan@gmail.com" },
    { nombre: "Ronaldo", telefono: 5764144, correo: "Ronaldo@gmail.com" },
    { nombre: "Flores", telefono: 5764145, correo: "Flores@gmail.com" },
    { nombre: "María", telefono: 5764146, correo: "Maria@gmail.com" }
];

function mostrarContactos(agenda) {
    agenda.forEach(contacto => {
        console.log(`Nombre: ${contacto.nombre} - Tel: ${contacto.telefono}`);
    });
}

function buscarPorNombre(agenda, nombre) {
    for (let contacto of agenda) {
        if (contacto.nombre === nombre) {
            return contacto.correo;
        }
    }
    return "Contacto no encontrado";
}

mostrarContactos(agenda);
console.log(buscarPorNombre(agenda, "Bryan"));    // existe
console.log(buscarPorNombre(agenda, "Carlos"));   // no existe
