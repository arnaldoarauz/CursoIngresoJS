/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
    //declarar variables
    let numero;
    let seguir;
    let sumaNegativos = 0;
    let sumaPositivos = 0;
    let contadorNegativos = 0;
    let contadorPositivos = 0;
    let contadorCeros = 0;
    let contadorPares = 0;
    let promedioPositivos = 0;
    let promedioNegativos = 0;
    let diferencia;

    //generar bucle del tipo mientras el usuario quiera (do while)
    do{
        numero = parseInt(prompt("Ingrese un numero"));

        if(numero > 0){ //analizo el signo del numero
            sumaPositivos = sumaPositivos + numero;
            contadorPositivos++;
        }else if(numero == 0){
            contadorCeros++;
        }else{
            sumaNegativos = sumaNegativos + numero;
            contadorNegativos++;
        }

        if(numero % 2 == 0){ //analizar par e impar
            contadorPares++;
        }

        seguir = prompt("¿Quiere ingresar otro numero?");
    }while(seguir == "s");

    if(contadorPositivos != 0){ 
        promedioPositivos = sumaPositivos / contadorPositivos;
    }

    if(contadorNegativos != 0){
        promedioNegativos = sumaNegativos / contadorNegativos;
    }

    diferencia = contadorPositivos - contadorNegativos;

    //mostrar informacion
    document.write("1-Suma de los negativos " + sumaNegativos + "</br>" );
    document.write("2-Suma de los positivos " + sumaPositivos + "</br>");
    document.write("3-Cantidad de los positivos " + contadorPositivos + "</br>" );
    document.write("4-Cantidad de los negativos " + contadorNegativos + "</br>" );
    document.write("5-Cantidad de los ceros " + contadorCeros + "</br>" );
    document.write("6-Cantidad de pares " + contadorPares + "</br>" );
    document.write("7-Promedio de los positivos " + promedioPositivos + "</br>" );
    document.write("8-Promedio de los Negativos " + promedioNegativos + "</br>" );
    document.write("9-Diferencia entre prositivos y negativos " + diferencia + "</br>" );
}