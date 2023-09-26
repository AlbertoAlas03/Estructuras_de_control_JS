const containerStudents = document.querySelector("#idContainerStudents");

const BtnPromedio = document.querySelector("#idBtnPromedio");
BtnPromedio.addEventListener("click", generarStudent);

function generarStudent() {
    let ArrayStudents = new Array();

    let TotalStudents = document.querySelector("#inputNumberStudents").value;
    let contador = 1, student, calificacion, convert = 0;

    while (contador <= TotalStudents) {
        student = prompt(`Ingrese el nombre del estudiante ${contador}`);

        do{
            calificacion = prompt(`Ingrese la calificacion del estudiante ${contador}`);
            convert = parseFloat(calificacion);

        }while(isNaN(convert) || convert < 0 || convert > 10);
            
        ArrayStudents[contador - 1] = new Array(student, parseFloat(calificacion).toFixed(2));
        contador++;
    }

    let CalificacionAlta = -1, promedio = 0, BestStudent = '';

    let listado = "<h3>Listado de estudiantes registrados</h3>";
    listado += "<ol>";
    for(let indice of ArrayStudents){
        let nombre = indice[0];
        let nota = indice[1];

        listado += `<li><b>Nombre:</b> ${nombre} - <b>Calificación:</b> ${nota}</li>`;

        if(parseFloat(nota) > CalificacionAlta){
           CalificacionAlta = parseFloat(nota);
           BestStudent = nombre;
        }

        promedio += parseFloat(nota);
    }
    listado += "</ol>";
    promedio = parseFloat(promedio / ArrayStudents.length).toFixed(2);
    listado += `<p><b>Promedio de calificaciones:</b> ${promedio}`;
    listado += `<br><b>Estudiante con mejor calificación:</b> ${BestStudent}</p>`;

    containerStudents.innerHTML = listado;
}