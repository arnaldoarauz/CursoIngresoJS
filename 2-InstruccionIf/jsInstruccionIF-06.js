function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){
		alert("Es adulto");
	}else if(edad >= 13){
		alert("Es adolescente");
	}else{
		alert("Es niño");
	}



}//FIN DE LA FUNCIÓN