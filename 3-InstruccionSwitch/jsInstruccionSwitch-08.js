function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			break;
		default:
			alert("Hace frio");		

	}

}//FIN DE LA FUNCIÓN