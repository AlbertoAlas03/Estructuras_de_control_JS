document.addEventListener("DOMContentLoaded", function () {
    const containerStudents = document.querySelector("#idContainerEstudiantes");

    const BtnAddStudent = document.querySelector("#idBtnAgregarEstudiante");
    const BtnShowStudent = document.querySelector("#idBtnMostrarEstudiantes");

    BtnAddStudent.addEventListener("click", AddStudents);
    BtnShowStudent.addEventListener("click", ViewStudents);

    let ArrayStudent = new Array();

    function AddStudents() {
        const inputCarnet = document.querySelector("#inputCarnet").value.toString().toUpperCase();
        const inputNombres = document.querySelector("#inputName").value.toString().toUpperCase();
        const inputApellidos = document.querySelector("#inputApellidos").value.toString().toUpperCase();

        if (inputCarnet != "" && inputNombres != "" && inputApellidos != "") {
            ArrayStudent.push(
                new Array(inputCarnet, inputNombres, inputApellidos)
            );
            alert("Se registro el nuevo estudiante!");
            document.querySelector("#inputCarnet").value = "";
            document.querySelector("#inputName").value = "";
            document.querySelector("#inputApellidos").value = "";
            document.querySelector("#inputCarnet").focus();
        } else {
            alert("Faltan campos que completar!");
        }
    }

    function ViewStudents() {
        let totalStudents = ArrayStudent.length;
        if (totalStudents > 0) {
            let Carnet, Nombres, Apellidos;
            let table = "<table class='table table-light table-striped'>";
            table += "<thead>";
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col' style='width: 15%;'>Carnet</th>";
            table += "<th scope='col'>Nombres</th>";
            table += "<th scope='col'>Apellidos</th>";
            table += "</tr>";
            table += "</thead>";
            table += "<tbody>";

            for (let i = 0; i < ArrayStudent.length; i++) {
                Carnet = ArrayStudent[i][0];
                Nombres = ArrayStudent[i][1];
                Apellidos = ArrayStudent[i][2];

                table += `<tr>`;
                table += `<td scope = 'row' style='font-weight: bold;'>${i + 1}</td>`;
                table += `<td>${Carnet}</td>`;
                table += `<td>${Nombres}</td>`;
                table += `<td>${Apellidos}</td>`;
                table += `</tr>`;
            }
            table += "</tbody>";
            table += "</table>";
            containerStudents.innerHTML = table;
        }else{
            alert("No se han registrado estudiantes!");
        }
    }
});