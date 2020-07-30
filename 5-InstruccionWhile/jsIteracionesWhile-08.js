/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	// DECLARAR LAS VARIABLES
	let numero;
	let positivos = 0;
	let negativos = 1;
	let flg = 0;
	let seguir;
	//GENERO UN BUCLE DEL TIPO MIENTRAS EL USUARIO QUIERA (DO WHILE)
	do{
		// PIDO UN NUMERO
		numero = parseInt(prompt("Ingrese un numero: "));

		// ANALIZAR EL SIGNO(POR/NEG)
		// ACUMULO EL NUMERO DONDE CORRESPONDA
		if(numero >= 0){ // positivos
			positivos = positivos + numero;
		}
		else{ // negativos
			flag = 1;
			negativos = negativos * numero;
		}
		seguir = prompt("¿Quiere ingresar otro numero?: ");
	}while(seguir == "s");
	
	if(flag == 0){ // si entro aca es porq nos e ingreso ningun numero negativo
		negativos = 0;
	}
	// MOSTRAMOS EL RESULTADO
	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;


	

}//FIN DE LA FUNCIÓN