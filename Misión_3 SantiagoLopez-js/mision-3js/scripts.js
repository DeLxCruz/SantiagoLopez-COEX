var estudiantes = [];
var totalEstudiantes = 0;

function definirEstudiante() {
    totalEstudiantes = parseInt(prompt("Cuántos estudiantes desea registrar?"));
}

function registrarEstudiante(estudiante) {
    var nombre = prompt("Ingrese el nombre del estudiante");
    var codigo = parseInt(prompt("Ingrese el código del estudiante"));
    var nivel = prompt("Ingrese el nivel (Beginner, Junior, Senior)");

    estudiante.push({
        nombre: nombre,
        codigo: codigo,
        nivel: nivel,
        notas: []
    });
}

function mostrarEstudiantes() {
    console.log("Listado de estudiantes:");
    for (var i = 0; i < estudiantes.length; i++) {
        console.log(estudiantes[i].nombre + " - " + estudiantes[i].codigo + " - " + estudiantes[i].nivel);
    }
}

function registrarNotas() {
    for (var i = 0; i < estudiantes.length; i++) {
        for (var j = 0; j < 3; j++) {
            var nota = parseFloat(prompt("Ingrese la nota " + (j + 1) + " de " + estudiantes[i].nombre));
            while (nota < 0 || nota > 5) {
                nota = parseFloat(prompt("Ingrese una nota válida entre 0 y 5"));
            }
            estudiantes[i].notas.push(nota);
        }
    }
}

function mostrarNotas() {
    console.log("Notas de los estudiantes:");
    var promedio = 0;
    for (var i = 0; i < estudiantes.length; i++) {
        var promEstudiante = 0;
        for (var j = 0; j < estudiantes[i].notas.length; j++) {
            promEstudiante += estudiantes[i].notas[j];
        }
        promEstudiante = promEstudiante / estudiantes[i].notas.length;
        promedio += promEstudiante;
        console.log(estudiantes[i].nombre + " - Promedio: " + promEstudiante.toFixed(2) + " - " + (promEstudiante >= 3.5 ? "Aprobó" : "Reprobó"));
    }
    promedio = promedio / estudiantes.length;
    console.log("Promedio general del grupo de estudiantes: " + promedio.toFixed(2));
}

var opcion = 0;
while (opcion !== 6) {
    opcion = parseInt(prompt("Seleccione una opción:\n\n1. Definir cantidad de estudiantes\n2. Registrar datos estudiantes\n3. Mostrar listado de estudiantes\n4. Registrar notas estudiantes\n5. Imprimir notas estudiantes\n6. Salir"));
    switch (opcion) {
        case 1:
            definirEstudiante();
            break;
        case 2:
            for (var i = 0; i < totalEstudiantes; i++) {
                registrarEstudiante(estudiantes);
            }
            break;
        case 3:
            mostrarEstudiantes();
            break;
        case 4:
            registrarNotas();
            break;
        case 5:
            mostrarNotas();
            break;
        case 6:
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción inválida, por favor seleccione una opción válida");
            break;
    }
}
