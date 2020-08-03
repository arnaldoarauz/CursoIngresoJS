/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	
	clave = prompt("Ingrese el dato");

	while(clave != "utn750"){
		alert("El dato ingresado es invalido");
		clave = prompt("Reingrese el dato valido");
	}

	alert("Clave correcta");
}