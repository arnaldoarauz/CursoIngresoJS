function mostrar()
{
	//declaracion de variables
	let estacion;
	let destino;
	let descuento = 0;
	let aumento = 0;
	const TARIFA = 15000;
	let precioFinal;

	//relevamiento de datos de entrada
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	//calculo de porcentaje de aumento o descuento dependiendo de la estacion y el destino
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					aumento = 20;
					break;
				case "Mar del plata":
					descuento = 20;
					break;
				case "Cataratas":
				case "Cordoba":	
					descuento = 10;
					break;							 	
			}
			break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					descuento = 20;
					break;
				case "Mar del plata":
					aumento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10;
					break;			
			}
			break;
		case "Otoño":
		case "Primavera":	
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = 10;
					break;				
			}
			break;				 
	}// fin del switch de estacion

	//aplico descuento o aumento segun corresponda para conocer el precio final

	if(aumento != 0){
		precioFinal = TARIFA + TARIFA * aumento/100;
	}
	else if (descuento != 0){
		precioFinal = TARIFA - TARIFA * descuento/100;
	}
	else{
		precioFinal = TARIFA;
	}

	//mostramos la informacion al usuario
	alert("Precio final: $ " + precioFinal);

	



}//FIN DE LA FUNCIÓN