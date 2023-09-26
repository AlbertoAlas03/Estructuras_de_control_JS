const containerArreglo = document.querySelector("#ContenedorArreglo");
const containerArregloOrdenado = document.querySelector("#ContenedorArregloOrdenado"), ContenedorArregloOrdenadoASC = document.querySelector("#ContenedorArregloOrdenadoASC");
const BtnAgregar = document.querySelector("#BtnAgregar");
const BtnOrdenar = document.querySelector("#BtnOrdenar"), BtnOrdenarAscendente = document.querySelector("#BtnOrdenarAscendente");

BtnAgregar.addEventListener("click", addElement);
BtnOrdenar.addEventListener("click", orderElement);
BtnOrdenarAscendente.addEventListener("click", orderElementASC);

let array = new Array();

function addElement() {
    const number = parseInt(document.querySelector("#inputNumero").value);

    if (isNaN(number)) {
        alert("Debe ingresar un numero valido");
    } else {
        array.push(number);

        let caja = document.createElement("div");
        caja.className = "col-md-1 colum";
        let valor = document.createElement("h3");
        valor.textContent = number;
        caja.appendChild(valor);

        containerArreglo.insertAdjacentElement("beforeend", caja);
    }
}

function orderElement() {
    for (let i of array.sort()) {
        let caja = document.createElement("div");
        caja.className = "col-md-1 colum-green";
        let valor = document.createElement("h3");
        caja.textContent = i;
        caja.appendChild(valor);
        containerArregloOrdenado.insertAdjacentElement("beforeend", caja);
    }
}

function orderElementASC() {
   
    const sortedArray = [...array];
    sortedArray.sort((a, b) => a - b);
    for (let i of sortedArray) {
        let caja = document.createElement("div");
        caja.className = "col-md-1 colum-green";
        let valor = document.createElement("h3");
        valor.textContent = i; 
        caja.appendChild(valor);
        ContenedorArregloOrdenadoASC.insertAdjacentElement("beforeend", caja);
    }
}
