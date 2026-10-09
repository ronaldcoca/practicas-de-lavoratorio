const estudiante = {
    nombre: "María López",
    edad: 20,
    carrera: "Ingeniería en Sistemas",
    promedio: 9.2,
    universidad: "Universidad UNIVO"
};

for (const propiedad in estudiante) {
    console.log(`${propiedad}: ${estudiante[propiedad]}`);
}

if (estudiante.promedio >= 8) {
    console.log("Estudiante destacado");
}