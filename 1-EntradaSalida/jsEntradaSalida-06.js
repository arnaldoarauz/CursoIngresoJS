/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

