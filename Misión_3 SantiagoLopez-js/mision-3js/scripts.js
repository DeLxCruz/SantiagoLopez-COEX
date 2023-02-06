function menu() {
    let opcion = prompt("Seleccione una opción:\n\n1. Definir cantidad de estudiantes\n2. Registrar datos estudiantes\n3. Mostrar listado de estudiantes\n4. Registrar notas estudiantes\n5. Imprimir notas estudiantes\n6. Salir");
    return opcion;
}

function promNotas(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}

let opcion = 0;
let numEstudiantes = 0;
let listado = [];
let listNotas = [];

while (opcion != 6) {
    opcion = menu();
    switch (opcion) {
        case "1":
            numEstudiantes = prompt("Ingrese el número de estudiantes");
            break;

        case "2":
            for (let i = 0; i < numEstudiantes; i++) {

                let nombre = prompt("Ingrese el nombre del estudiante " + (i+1));
                let codigo = prompt("Ingrese el codigo del estudiante " + (i+1));
                let nivel = prompt("Ingrese el nivel del estudiante " + (i+1));

                listado.push({posicion: (i+1), nombre: nombre, codigo: codigo, nivel: nivel})
            }
            break;

        case "3":
            console.log("A continuación se muestra el listado registrado:");
            
            for (let i = 0; i < listado.length; i++) {
                console.log(listado[i].posicion + ". Nombre: " + listado[i].nombre + " -- " + "Código: " + listado[i].codigo + " -- " + "Nivel: " + listado[i].nivel);
            }
            break;

        case "4":
            for (let i = 0; i < numEstudiantes; i++) {
                
                let nota1 = prompt("Ingrese la primer nota del estudiante " + (i+1));
                let nota2 = prompt("Ingrese la segunda nota del estudiante " + (i+1));
                let nota3 = prompt("Ingrese la tercer nota del estudiante " + (i+1));

                if (nota1, nota2, nota3 > 5) {
                    prompt("Se califica de 0 a 5")
                }else{
                    let prom = promNotas(nota1, nota2, nota3);

                    listNotas.push({posicion: (i+1), nota: prom})
                }
            }
            break; 

        case "5":
            console.log("Las notas de los estudiantes son:");

            for (let i = 0; i < listNotas.length; i++) {
                console.log("Estudiante " + listNotas[i].posicion + ". " + "Nota: " + listNotas[i].nota);
            }
            break;

        case "6":
            break;

        default:
            console.log("Opción inválida. Por favor seleccione una opción valida.");
            break;
    }
}

