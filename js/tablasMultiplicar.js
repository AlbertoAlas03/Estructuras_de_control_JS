const containerResults = document.querySelector("#idContainerResultado");

const BtnCalcular = document.querySelector("#idBtnCalcular");
BtnCalcular.addEventListener("click", CalcularTabla);

function CalcularTabla() {
    const inputTable = document.querySelector("#inputTable").value;

    let contador = 1;

    if (inputTable > 0) {
        let tabla = `<h2>Tabla de multiplicar del ${inputTable}</h2>`;

        do {
            let resultado = contador * inputTable;
            tabla += `<div class="row text-center">`;
            tabla += `<div class="col-md-1 colum"><h3>${contador}<h3></div>`;
            tabla += `<div class="col-md-1 colum-green"><h3>x</h3></div>`;
            tabla += `<div class="col-md-1 colum"><h3>${inputTable}</h3></div>`;
            tabla += `<div class="col-md-1 colum-green"><h3>=</h3></div>`;
            tabla += `<div class="col-md-1 colum"><h3>${resultado}</h3></div>`;
            tabla += `</div>`;

            contador++;
        } while (contador <= 12);

        document.querySelector("#inputTable").value = 1;
        document.querySelector("#inputTable").focus();
        containerResults.innerHTML = tabla;
    }else{
        alert("No se ha ingresado un numero válido!");
    }
}