function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Se encuentra en el OESTE");
			break;
		case "Cataratas":
			alert("Se encuentra en el NORTE");
			break;
		case "Ushuaia":
			alert("Se encuentra en el SUR");
			break;
		default:
			alert("Se encuentra en el ESTE");			
	}
}//FIN DE LA FUNCIÓN