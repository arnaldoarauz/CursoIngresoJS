/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let totalAlambre;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    perimetro = (largo + ancho) *2; 
    totalAlambre = perimetro * 3;

    alert("Se necesitan " + totalAlambre + " metros de alambre");
}
function Circulo () 
{
    let radio;
    let alambre;
    
    radio = parseInt(document.getElementById("txtIdRadio").value);

    alambre = (radio * 2 * Math.PI) * 3;

    alert(" se necesita comprar " + alambre + " metros de alambre para un terreno circular");
}
function Materiales () 
{
    let largo;
    let ancho;
    let cantCemento;
    let cantCal;
    let area;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    area = largo * ancho;
    cantCemento = area * 2;
    cantCal = area * 3;
    
    alert("Se necesitan: " + cantCemento + " bolsas de cemento y " + cantCal + " para un terreno de " + area + " metros cuadrados.");


}