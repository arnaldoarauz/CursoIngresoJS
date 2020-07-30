var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	let numero;
	
	numero = Math.round(Math.random() * 2 + 1);

	if(numero == 1){
		eleccionMaquina = "Piedra";
	}
	else if(numero == 2){
		eleccionMaquina = "Papel"
	}
	else{
		eleccionMaquina = "Tijera";
	}
	mostrarResultado();
	//alert(eleccionMaquina);

}
function piedra()
{
	let comosalio;
	if(eleccionMaquina == "Piedra"){
		comosalio = "EMPATE";
		ContadorDeEmpates++;
	}
	else if(eleccionMaquina == "Papel"){
		comosalio = "PERDISTE";
		ContadorDePerdidas++;
	}
	else{
		comosalio = "GANASTE";
		ContadorDeGanadas++;
	}
	alert(eleccionMaquina + "---> " + comosalio);
	comenzar();
}
function papel()
{
	let comosalio;
	if(eleccionMaquina == "Piedra"){
		comosalio = "GANASTE";
		ContadorDeGanadas++;
	}
	else if(eleccionMaquina == "Papel"){
		comosalio = "EMPATE";
		ContadorDeEmpates++;
	}
	else{
		comosalio = "PERDISTE";
		ContadorDePerdidas++;
	}
	alert(eleccionMaquina + "---> " + comosalio);
	comenzar();
}
function tijera()
{
	let comosalio;
	if(eleccionMaquina == "Piedra"){
		comosalio = "PERDISTE";
		ContadorDePerdidas++;
	}
	else if(eleccionMaquina == "Papel"){
		comosalio = "GANASTE";
		ContadorDeGanadas++;
	}
	else{
		comosalio = "EMPATE";
		ContadorDeEmpates++;
	}
	alert(eleccionMaquina + "---> " + comosalio);
	comenzar();
}

function mostrarResultado()
{
		document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
		document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
		document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
}