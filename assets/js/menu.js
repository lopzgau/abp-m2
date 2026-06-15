//CREAMOS UNA VARIABLE CON UN MONTO SIMULANDO EL BALANCE DE CUENTA DE UNA BASE DE DATOS

let balanceDB = 60_000;

//CAPTURAMOS EL ELEMENTO CON EL ID INDICADO Y LO GUARDAMOS EN UNA CONST
const balanceEl = document.getElementById("balance");

//ASIGNAMOS EL VALOR DEL BALANCE DE LA BASE DE DATOS SIMULADA AL ELEMENTO
balanceEl.innerText = balanceDB.toLocaleString("es-CL");

//inerText sirve para obtener y asignar un contenido a un elemento

