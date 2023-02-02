function calcImc(peso, altura) {
    return peso / (altura * altura);
}

function menu() {
    let opcion = prompt("Seleccione una opción:\n1. Ingresar familiares\n2. Ingresar datos necesarios para realizar los cálculos\n3. Mostrar resultados\n4. Salir");
    return opcion;
}

let numFamiliares = 0;
let imcRes = [];
let opcion = 0;

while (opcion != 4) {
    opcion = menu();
    switch (opcion) {
        case "1":
            numFamiliares = prompt("Ingrese el número de familiares");
            break;
        case "2":
            for (let i = 0; i < numFamiliares; i++) {
                let peso = prompt("Ingrese el peso (en kg) del familiar " + (i + 1));
                let altura = prompt("Ingrese la altura (en m) del familiar " + (i + 1));
                let imc = calcImc(peso, altura);
                imcRes.push({familiar: (i + 1), imc: imc});
            }
            break;
        case "3":
            for (let i = 0; i < imcRes.length; i++) {
                console.log("El IMC del familiar " + imcRes[i].familiar + " es " + imcRes[i].imc);
            }
            break;
        case "4":
            break;
        default:
            console.log("Opción inválida. Por favor, seleccione una opción válida.");
            break;
    }
}
