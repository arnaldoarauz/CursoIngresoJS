/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numUno;
	let numDos;
	let resultado;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numUno + numDos;

	alert("La suma es: " + resultado);
}

function restar()
{
	let numUno;
	let numDos;
	let resultado;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numUno - numDos;

	alert("La resta es: " + resultado);
}

function multiplicar()
{ 
	let numUno;
	let numDos;
	let resultado;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numUno * numDos;

	alert("La multiplicacion es: " + resultado);
}

function dividir()
{
	let numUno;
	let numDos;
	let resultado;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numUno / numDos;

	alert("La division es: " + resultado);
}

