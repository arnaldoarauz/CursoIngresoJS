/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let maximo;
	let minimo;
	let seguir;
	let flag = 0;

	do{
		numero = parseInt(prompt("Ingrese un numero: "));

		if(flag == 0 || numero > maximo){
			maximo = numero;
		}

		if(flag == 0 || numero < minimo){
			minimo = numero;
			flag = 1;
		}

		seguir = prompt("¿Quiere ingresar otro numero?");
	}while(seguir == "s");

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
	
}
// --- dentro del bucle ---
// pido un numero
// averiguo si es la primera iteracion
// si es la primera iteracion lo inicializo max y min con ese numero
// en las demas iteracion hay q compararlos con contra el maximo anterior y el minimo anterior
// si tengo un nuevo maximo o minimo actualizo segun corresponda
// --- despues del bucle --- 
// mostrar los resultados (max/min)