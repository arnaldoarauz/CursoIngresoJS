function mostrar()
{
	let nota;
	let maximo = 10;
	let minimo = 1;

	nota = Math.round(Math.random() * (maximo - minimo) + minimo);

	if(nota >= 9){
		alert("La nota es: " + nota + ", EXCELENTE");

	}else if(nota >= 4){
		alert("La nota es: " + nota + ", APROBO");

	}else{
		alert("La nota es: " + nota + ", Vamos, la proxima se puede!!");

	}



}//FIN DE LA FUNCIÓN