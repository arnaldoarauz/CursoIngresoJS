/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos = 0;
let flag = 0;

function comenzar()
{
  // genero el numero secreto entre 1 y 100
  numeroSecreto = Math.round(Math.random() * 99 + 1);

  alert("Listo, ya pense un numero, trata de adivinarlo,");
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  document.getElementById("txtIdNumero").focus();
  flag = 1;
  contadorIntentos = 0;
}

function verificar()
{
  let numero;

  if ( flag == 0) {

    alert("Debes presionar primero el boton comenzar");

  } else {
    numero = parseInt(document.getElementById("txtIdNumero").value);
    contadorIntentos++;
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    
    if(numero == numeroSecreto){
      switch(contadorIntentos){
		case 1: 
		  	alert("Usted es un Psiquico. " + contadorIntentos + " Intentos");
			break;
		case 2:
			alert("Excelente percepcion. " + contadorIntentos + " Intentos");
			break;
		case 3:
			alert("Esto es suerte. " + contadorIntentos + " Intentos");
			break;
		case 4:
			alert("Excelente tecnica. " + contadorIntentos + " Intentos");
			break;
		case 5:
			alert("Usted esta en la media. " + contadorIntentos + " Intentos");
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alert("Falta de tecnica. " + contadorIntentos + " Intentos");
			break;
		default:
			alert("Afortunado en el amor. " + contadorIntentos + " Intentos");						
	  }
      
      flag = 0;
    }
    else if(numero > numeroSecreto){
      alert("Se paso...");
    }
    else{
      alert("Te falta... ");
    }
    
    document.getElementById("txtIdNumero").value = "";
    document.getElementById("txtIdNumero").focus();
  }

	
}