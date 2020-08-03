/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese sexo (f o m): ").toLocaleLowerCase();

	//while(!(sexo =="f" || sexo == "m" || sexo == "F" || sexo == "M"))
	while(sexo != "f" && sexo != "m"){
		sexo = prompt("Error. Reingrese sexo (f o m): ").toLocaleLowerCase();
	}

	document.getElementById("txtIdSexo").value = sexo;
	
}