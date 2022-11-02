
const valorTicket = 200;

let descuentoEstudiante = 0.20;
let descuentoTrainee    = 0.50;
let descuentoJunior     = 0.85;

let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");

// quitar el estilo de error

function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0 ; i< x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

// ******aca empieza la función "total a pagar" *******

function total_a_pagar() {
   
    quitarClaseError();
   
    if (nombre.value === "") {
        alert("Escribi tu nombre por favor.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === ""){
        alert("Escribi tu apellido por favor.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === ""){
        alert("Escribi una dirección de mail por favor.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

//  es valido el correo?
const emailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

if (!emailValido(mail.value)) {
    alert("Escribí un correo válido por favor");
    mail.classList.add("is-invalid");
    mail.focus();
    return;
}

// ver cantidad de tickets
if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
    alert("Ingresá una cantidad de tickets correcta");
    cantidadTickets.classList.add("is-invalid");
    cantidadTickets.focus();
    return;
}

if (categoria.value == "") {
    alert("Seleccioná una categoría.");
    categoria.classList.add("is-invalid");
    categoria.focus();
    return;
}

// tickets por el valor

let totalValorTickets = (cantidadTickets.value) * valorTicket;

// descuentos  **** optimizar **** 
if (categoria.value == 0 || categoria.value == 1) {
    totalValorTickets = totalValorTickets;
}

if (categoria.value == 2) {
    totalValorTickets = totalValorTickets * descuentoEstudiante;
} 

if (categoria.value == 3) {
    totalValorTickets = totalValorTickets * descuentoTrainee;
}

if (categoria.value == 4) {
    totalValorTickets = totalValorTickets * descuentoJunior;
}

totalPago.innerHTML = totalValorTickets;

}


//  Boton resumen recibe un escuchador y la funcion del calculo
btnResumen.addEventListener('click', total_a_pagar);

function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar);