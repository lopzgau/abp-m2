//CREAMOS UNA VARIABLE CON UN MONTO SIMULANDO EL BALANCE DE CUENTA DE UNA BASE DE DATOS

let balanceDB = 60_000;

//CAPTURAMOS EL ELEMENTO CON EL ID INDICADO Y LO GUARDAMOS EN UNA CONST
const balanceEl = document.getElementById("balance");

//ASIGNAMOS EL VALOR DEL BALANCE DE LA BASE DE DATOS SIMULADA AL ELEMENTO
balanceEl.innerText = balanceDB.toLocaleString("es-CL");


//CAPTURAR FORMULARIO Y GUARDARLO EN UNA VARIABLE
const formDepositoEl = document.getElementById("formDeposito")

//CAPTURAMOS EVENTO SUBMIT QUE HACE EL FORMULARIO DEPOSITO
formDepositoEl.addEventListener("submit", function (event) {

    //PREVENIR LAS ACCIONES POR DEFECTO
    event.preventDefault();

    //CAPTURAMOS EL MONTO INGRESADO POR EL USUARIO
    let montoDeposito = document.getElementById("monto").value;

    //ACTUALIZAR MONTO DE LA BASE DE DATOS (IMPORTANTE, SE DEBE REALIZAR CONVERSION DE TIPO)
    montoDeposito = Number(montoDeposito);
    
    balanceDB += montoDeposito;

    //ACTUALIZAMOS EL NUEVO BALANCE EN EL ELEMENTO DE DOM
    balanceEl.innerText = balanceDB.toLocaleString("es-CL");

    //LIMPIAMOS EL FORMULARIO
    formDepositoEl.reset();

    alert("Se ha agregado correctamente el monto de: " + Number(montoDeposito).toLocaleString("es-CL") + " a su cuenta.")

})

