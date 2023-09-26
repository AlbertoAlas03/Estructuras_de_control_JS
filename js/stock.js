const BtnAccept = document.querySelector("#BtnAceptar"), ContainerProducts = document.querySelector("#ContainerProducts"), BtnSum = document.querySelector("#BtnSum"), BtnNew = document.querySelector("#BtnNew"), ContainerSum = document.querySelector("#ContainerSum"), local = document.querySelector("#local");
BtnAccept.addEventListener("click", Accept);
BtnNew.addEventListener("click", New);
BtnSum.addEventListener("click", Sum);
BtnSum.disabled = true;
BtnAccept.disabled = true;
inputAlimento.disabled = true;
Precio.disabled = true;
let ArrayProducts = new Array();

function New() {
    BtnAccept.disabled = false;
    BtnNew.disabled = true;
    Precio.disabled = false;
    inputAlimento.disabled = false;
    ContainerProducts.innerHTML = "";
    ContainerSum.innerHTML = "";
    local.innerHTML = "Ninguno...";
}
function Accept() {
    if (inputAlimento.value == "" || Precio.value == "") {
        alert("No se admiten campos vacios.");
    } else if (Precio.value < 0) {
        alert("Precio ingresado no válido");
        Precio.value = "";
        document.querySelector("#Precio").focus();
    } else {
        alert("Registro agregado con exito.");
        local.innerHTML = "";
        const inputAlimento = document.querySelector("#inputAlimento").value.toString(), Precio = document.querySelector("#Precio").value.toString();
        let price = parseFloat(Precio);
        ArrayProducts.push(new Array(inputAlimento, price));
        document.querySelector("#inputAlimento").value = "";
        document.querySelector("#Precio").value = "";
        BtnSum.disabled = false;
        ViewProducts();
    }
}

function Sum() {
    BtnAccept.disabled = true;
    BtnNew.disabled = false;
    BtnSum.disabled = true;
    inputAlimento.disabled = true;
    Precio.disabled = true;
    let sum = 0, prices;
    let table = "<table class='table table-light table-striped'>";
    table += "<thead>";
    table += "<tr>";
    table += "<th scope='col' style='width: 50%;'>Total de la venta</th>";
    for (let i = 0; i < ArrayProducts.length; i++) {
        prices = ArrayProducts[i][1];
        sum += prices;
    }
    table += `<th>$${sum.toFixed(2)}</th>`;
    table += "</tr>";
    table += "</thead>";    
    table += "</table>";
    ContainerSum.innerHTML = table;
}

function ViewProducts() {
    let Products = ArrayProducts.length;
    if (Products > 0) {
        let NameProduct, Price;
        let table = "<table class='table table-light table-striped'>";
        table += "<thead>";
        table += "<tr>";
        table += "<th scope='col' style='width: 5%;'>#</th>";
        table += "<th scope='col' style='width: 50%;'>Producto</th>";
        table += "<th scope='col'>Precio</th>";
        table += "</tr>";
        table += "</thead>";
        table += "<tbody>";

        for (let i = 0; i < ArrayProducts.length; i++) {
            NameProduct = ArrayProducts[i][0];
            Price = ArrayProducts[i][1];

            table += `<tr>`;
            table += `<td scope = 'row' style='font-weight: bold;'>${i + 1}</td>`;
            table += `<td>${NameProduct}</td>`;
            table += `<td>$${Price}</td>`;
            table += `</tr>`;
        }
        table += "</tbody>";
        table += "</table>";
        ContainerProducts.innerHTML = table;
    }
}
