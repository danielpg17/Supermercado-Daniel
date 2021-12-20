let nClientes1 = 0;
let nClientes2 = 0;
let nClientes3 = 0;
let nClientes4 = 0;

let inicioCaja1;
let finalCaja1;

let inicioCaja2;
let finalCaja2;

let inicioCaja3;
let finalCaja3;

let inicioCaja4;
let finalCaja4;

let modoNoche = false;

let pattern1 = /^Caja 1: \+1$/;
let pattern2 = /^Caja 2: \+1$/;
let pattern3 = /^Caja 3: \-2$/;
let pattern4 = /^Guardar$/;
let pattern5 = /^Recuperar$/;


// C A J A 1

function sumarCliente(){

  nClientes1+=1;
  document.getElementById("clientesCaja1").innerHTML = nClientes1;

  if(nClientes1 == 1){

    inicioCaja1 = new Date();

}
  
if(nClientes1 >= 1){

document.getElementById("caja1").style.backgroundColor = "red";
document.getElementById("boton2").disabled = false;

}

if(nClientes1 == 4){


finalCaja1 = new Date();
let dif = (finalCaja1.getTime() - inicioCaja1.getTime()) / 1000;
document.getElementById("caja1").style.backgroundColor = "grey";
alert("No se pueden añadir más clientes, la caja está llena. Han transcurrido "+dif+" segundos.")
document.getElementById("boton1").disabled = true;
}
}

function restarCliente(){
  
nClientes1-=1;
document.getElementById("clientesCaja1").innerHTML = nClientes1;

if(nClientes1 < 4){

document.getElementById("caja1").style.backgroundColor = "red";
document.getElementById("boton1").disabled = false;

}

if(nClientes1 <= 0){

document.getElementById("caja1").style.backgroundColor = "lightgreen";
alert("La caja está libre.")
document.getElementById("boton2").disabled = true;
nClientes1 = 0;
document.getElementById("clientesCaja1").innerHTML = nClientes1;
} 

}


// C A J A 2

function sumarCliente2(){

nClientes2+=1;
document.getElementById("clientesCaja2").innerHTML = nClientes2;

if(nClientes2 == 1){

inicioCaja2 = new Date();

}

if(nClientes2 >= 1){

document.getElementById("caja2").style.backgroundColor = "red";
document.getElementById("boton4").disabled = false;

}

if(nClientes2 == 4){


finalCaja2 = new Date();
let dif = (finalCaja2.getTime() - inicioCaja2.getTime()) / 1000;
document.getElementById("caja2").style.backgroundColor = "grey";
alert("No se pueden añadir más clientes, la caja está llena. Han transcurrido "+dif+" segundos.")
document.getElementById("boton3").disabled = true;
}
}

function restarCliente2(){

nClientes2-=1;
document.getElementById("clientesCaja2").innerHTML = nClientes2;

if(nClientes2 < 4){

document.getElementById("caja2").style.backgroundColor = "red";
document.getElementById("boton3").disabled = false;

}

if(nClientes2 <= 0){

document.getElementById("caja2").style.backgroundColor = "lightgreen";
alert("La caja está libre.")
document.getElementById("boton4").disabled = true;
nClientes2 = 0;
document.getElementById("clientesCaja2").innerHTML = nClientes2;
} 
}



// C A J A 3

function sumarCliente3(){

nClientes3+=1;
document.getElementById("clientesCaja3").innerHTML = nClientes3;

if(nClientes3 == 1){

inicioCaja3 = new Date();

}

if(nClientes3 >= 1){

document.getElementById("caja3").style.backgroundColor = "red";
document.getElementById("boton6").disabled = false;

}

if(nClientes3 == 4){


finalCaja3 = new Date();
let dif = (finalCaja3.getTime() - inicioCaja3.getTime()) / 1000;
document.getElementById("caja3").style.backgroundColor = "grey";
alert("No se pueden añadir más clientes, la caja está llena. Han transcurrido "+dif+" segundos.")
document.getElementById("boton5").disabled = true;
}
}

function restarCliente3(){

nClientes3-=1;
document.getElementById("clientesCaja3").innerHTML = nClientes3;

if(nClientes3 < 4){

document.getElementById("caja3").style.backgroundColor = "red";
document.getElementById("boton5").disabled = false;

}

if(nClientes3 <= 0){

document.getElementById("caja3").style.backgroundColor = "lightgreen";
alert("La caja está libre.")
document.getElementById("boton6").disabled = true;
nClientes3 = 0;
document.getElementById("clientesCaja3").innerHTML = nClientes3;
} 
}


function restarCliente3regex(number){

nClientes3 -= number;
document.getElementById("clientesCaja3").innerHTML = nClientes3;

if(nClientes3 < 4){

document.getElementById("caja3").style.backgroundColor = "red";
document.getElementById("boton5").disabled = false;

}

if(nClientes3 <= 0){

document.getElementById("caja3").style.backgroundColor = "lightgreen";
alert("La caja está libre.")
document.getElementById("boton6").disabled = true;
nClientes3 = 0;
document.getElementById("clientesCaja3").innerHTML = nClientes3;
} 
}




// C A J A 4

function sumarCliente4(){

nClientes4+=1;
document.getElementById("clientesCaja4").innerHTML = nClientes4;

if(nClientes4 == 1){

inicioCaja4 = new Date();

}

if(nClientes4 >= 1){

document.getElementById("caja4").style.backgroundColor = "red";
document.getElementById("boton8").disabled = false;

}

if(nClientes4 == 4){


finalCaja4 = new Date();
let dif = (finalCaja4.getTime() - inicioCaja4.getTime()) / 1000;
document.getElementById("caja4").style.backgroundColor = "grey";
alert("No se pueden añadir más clientes, la caja está llena. Han transcurrido "+dif+" segundos.")
document.getElementById("boton7").disabled = true;
}
}

function restarCliente4(){

nClientes4-=1;
document.getElementById("clientesCaja4").innerHTML = nClientes4;

if(nClientes4 < 4){

document.getElementById("caja4").style.backgroundColor = "red";
document.getElementById("boton7").disabled = false;

}

if(nClientes4 <= 0){

document.getElementById("caja4").style.backgroundColor = "lightgreen";
alert("La caja está libre.")
document.getElementById("boton8").disabled = true;
nClientes4 = 0;
document.getElementById("clientesCaja4").innerHTML = nClientes4;
} 
}


//  R E G E X


function comprobarRegex(){

let texto = document.getElementById("campoInput").value;

if(pattern1.test(texto)){

sumarCliente();

}

if(pattern2.test(texto)){

sumarCliente2();

}

if(pattern3.test(texto)){

let number = 2;
restarCliente3regex(number);

}

// Escribiendo 'Guardar' En el input text, guardamos el estado del modo noche, si está activado, este se guardará.

if(pattern4.test(texto)){

localStorage.setItem('modo', modoNoche);

}

//Escribiendo 'Recuperar' en el input text, si el modo noche esta guardado en el localStorage, se activará automáticamente.

if(pattern5.test(texto)){

modoNoche = JSON.parse(localStorage.getItem("modo"));

if(modoNoche){

modoNocturno();

}

}



document.getElementById("campoInput").value = "";

}


// M O D O -- N O C T U R N O


function modoNocturno() {

document.getElementsByTagName('body')[0].style = 'background-color: black; color: white;';
document.getElementById("contenedorcajas").style.backgroundColor = '#464241';
document.getElementById("bg-image").style.opacity = 0.5;
document.getElementById("botonNoche").disabled = true;
document.getElementById("botonDia").disabled = false;
modoNoche = true;


}

function modoDia() {


document.getElementsByTagName('body')[0].style = 'background-color: white; color: black;';
document.getElementById("contenedorcajas").style.backgroundColor = '#EFE2BA';
document.getElementById("bg-image").style.opacity = 1;
document.getElementById("botonNoche").disabled = false;
document.getElementById("botonDia").disabled = true;
modoNoche = false;



}