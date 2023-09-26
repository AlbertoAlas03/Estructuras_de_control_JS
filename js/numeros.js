const BtnCantidadCifras = document.querySelector("#BtnCantidadCifras"), BtnCantidadCifrasPares = document.querySelector("#BtnCantidadCifrasPares"), BtnCantidadCifrasImpares = document.querySelector("#BtnCantidadCifrasImpares"), BtnSumaCifrasPares = document.querySelector("#BtnSumaCifrasPares"), BtnSumaCifrasImpares = document.querySelector("#BtnSumaCifrasImpares"), BtnCifras = document.querySelector("#BtnCifras"), BtnCifraMayor = document.querySelector("#BtnCifraMayor"), BtnCifraMenor = document.querySelector("#BtnCifraMenor"), BtnReady = document.querySelector("#BtnReady");
let number = document.querySelector("#inputNumber"), BtnAccept = document.querySelector("#BtnAccept"), CantidadCifrasImpares = document.querySelector("#CantidadCifrasImpares");
const CantidadCifras = document.querySelector("#CantidadCifras"), CantidadCifrasPares = document.querySelector("#CantidadCifrasPares"), SumaCifrasPares = document.querySelector("#SumaCifrasPares"), SumaCifrasImpares = document.querySelector("#SumaCifrasImpares"), SumaCifras = document.querySelector("#SumaCifras"), CifraMayor = document.querySelector("#CifraMayor"), CifraMenor = document.querySelector("#CifraMenor");

BtnAccept.addEventListener("click", Accept);
BtnReady.addEventListener("click", Start);
BtnCantidadCifras.addEventListener("click", NumberFigures);
BtnCantidadCifrasPares.addEventListener("click", EvenNumbers);
BtnCantidadCifrasImpares.addEventListener("click", OddsNumbers);
BtnSumaCifrasPares.addEventListener("click", SumEvenNumbers);
BtnSumaCifrasImpares.addEventListener("click", SumOddsNumbers);
BtnCifras.addEventListener("click", SumNumbers);
BtnCifraMayor.addEventListener("click", HightNumber);
BtnCifraMenor.addEventListener("click", LowerNumber);
BtnAccept.disabled = true, number.disabled = true, BtnCantidadCifras.disabled = true, BtnCantidadCifrasImpares.disabled = true, BtnCantidadCifrasPares.disabled = true, BtnCifraMayor.disabled = true, BtnCifraMenor.disabled = true, BtnCifras.disabled = true, BtnSumaCifrasImpares.disabled = true, BtnSumaCifrasPares.disabled = true;
function Accept() {
    if (number.value == "") {
        alert("Debe ingresar un número");
        number.focus();
    } else {
        alert("Dato ingresado con exito");
        BtnAccept.disabled = true;
        BtnReady.disabled = false;
        number.disabled = true;
        BtnCantidadCifras.disabled = false, BtnCantidadCifrasImpares.disabled = false, BtnCantidadCifrasPares.disabled = false, BtnCifraMayor.disabled = false, BtnCifraMenor.disabled = false, BtnCifras.disabled = false, BtnSumaCifrasImpares.disabled = false, BtnSumaCifrasPares.disabled = false;
    }
}

function Start() {
    BtnAccept.disabled = false;
    BtnReady.disabled = true;
    number.disabled = false;
    number.value = "";
    CantidadCifras.innerHTML = "";
    CantidadCifrasPares.innerHTML = "";
    CantidadCifrasImpares.innerHTML = "";
    SumaCifrasPares.innerHTML = "";
    SumaCifras.innerHTML = "";
    CifraMayor.innerHTML = "";
    CifraMenor.innerHTML = "";
    BtnCantidadCifras.disabled = false, BtnCantidadCifrasImpares.disabled = true, BtnCantidadCifrasPares.disabled = true, BtnCifraMayor.disabled = true, BtnCifraMenor.disabled = true, BtnCifras.disabled = true, BtnSumaCifrasImpares.disabled = true, BtnSumaCifrasPares.disabled = true;
}

function NumberFigures() {
    // Obtener el valor del número ingresado
    let inputValue = number.value;

    // Convertir el número en cadena y obtener la cantidad de cifras
    let numString = Math.abs(parseInt(inputValue)).toString();
    let cifras = numString.length;

    // Actualizar el contenido del elemento HTML CantidadCifras
    CantidadCifras.innerHTML = `Cantidad de cifras: ${cifras}`;
}

function EvenNumbers() {
    let inputValue = number.value;
    let value = EvenFigures(inputValue);
    CantidadCifrasPares.innerHTML = `Cantidad de cifras pares: ${value}`;
}

function OddsNumbers() {
    let inputValue = number.value;
    let value = OddsFigures(inputValue);
    CantidadCifrasImpares.innerHTML = `Cantidad de cifras impares: ${value}`;
}

function SumEvenNumbers() {
    let inputValue = number.value, value = SumEvenFigures(inputValue);
    SumaCifrasPares.innerHTML = `Suma de cifras pares: ${value}`;
}

function SumOddsNumbers() {
    let inputValue = number.value, value = SumOddsFigures(inputValue);
    SumaCifrasImpares.innerHTML = `Suma de cifras impares: ${value}`;
}

function SumNumbers() {
    let inputValue = number.value, value = SumFigures(inputValue);
    SumaCifras.innerHTML = `Suma de todas las cifras: ${value}`;
}

function HightNumber() {
    let inputValue = number.value, value = HigherNumber(inputValue);
    CifraMayor.innerHTML = `La cifra mayor es: ${value}`;
}

function LowerNumber() {
    let inputValue = number.value, value = LowerFigure(inputValue);
    CifraMenor.innerHTML = `La cifra menor es : ${value}`;
}

function OddsFigures(oddNumber) {
    let Number = Math.abs(oddNumber).toString();
    let OddQuantity = 0;
    for (let i = 0; i < Number.length; i++) {
        let Odd = parseInt(Number[i]);
        if (Odd % 2 !== 0) {
            OddQuantity++;
        }
    }
    return OddQuantity;
}

function EvenFigures(EvenNumber) {
    let Number = Math.abs(EvenNumber).toString(), EvenQuantity = 0;
    for (let i = 0; i < Number.length; i++) {
        let figure = parseInt(Number[i]);
        if (figure % 2 === 0) {
            EvenQuantity++;
        }
    }
    return EvenQuantity;
}

function SumEvenFigures(EvenNumber) {
    let Number = Math.abs(EvenNumber).toString(), sum = 0;
    for (let i = 0; i < Number.length; i++) {
        let numbers = parseInt(Number[i]);
        if (numbers % 2 === 0) {
            sum += numbers;
        }
    }
    return sum;
}

function SumOddsFigures(oddNumber) {
    let Number = Math.abs(oddNumber).toString(), sum = 0;
    for (let i = 0; i < Number.length; i++) {
        let numbers = parseInt(Number[i]);
        if (numbers % 2 !== 0) {
            sum += numbers;
        }
    }
    return sum;
}

function SumFigures(Figures) {
    let Number = Math.abs(Figures).toString(), sum = 0;
    for (let i = 0; i < Number.length; i++) {
        let numbers = parseInt(Number[i]);
        sum += numbers;
    }
    return sum;
}

function HigherNumber(Number) {
    let StringNumber = Number.toString(), highNumber = parseInt(StringNumber[0]);
    for (let i = 0; i < StringNumber.length; i++) {
        const digit = parseInt(StringNumber[i]);
        if (digit > highNumber) {
            highNumber = digit;
        }
    }
    return highNumber;
}

function LowerFigure(Number) {
    let StringNumber = Number.toString(), minorNumber = parseInt(StringNumber[0]);
    for (let i = 0; i < StringNumber.length; i++) {
        const digit = parseInt(StringNumber[i]);
        if (digit < minorNumber) {
            minorNumber = digit;
        }
    }
    return minorNumber;
}

