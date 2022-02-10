/*
Alumno: Paul Ramirez

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let alambre;

    largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);
    
    alambre="Se necesita comprar "+((largo+ancho)*3)+" metro de alambre";
    alert(alambre);

}
function Circulo () 
{
    let alambre;
    let radio;
    
    radio=parseInt(document.getElementById("txtIdRadio").value);

    alambre="Se necesita comprar "+(2*3.14*radio)+" metro de alambre";
    alert(alambre)
     
}
function Materiales () 
{
    let largo;
    let ancho;
    let bolsaCemento;
    let bolsaCal;
    largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);

    bolsaCemento="Se necesitan "+((largo*ancho)*3)+" bolsas de cemento";
    
    alert(bolsaCemento);

    bolsaCal="Se necesitan "+((largo*ancho)*2)+" bolsas de cal";
    alert(bolsaCal);


	
}