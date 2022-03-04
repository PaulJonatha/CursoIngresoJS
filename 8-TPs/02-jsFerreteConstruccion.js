/*
Alumno: Paul Ramirez Benites
Tp 2

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

    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);
    alambre=((2*largo+ancho*2)*3);
    //-----------------------------Perimetro de rectangulo----------------------------
    alambre="Se necesita comprar "+(alambre)+" metro de alambre";
    alert(alambre);

}
function Circulo () 
{
    let alambre;
    let radio;
    
    radio=parseFloat(document.getElementById("txtIdRadio").value);
    alambre=(2*3.14*radio);
    //-----------------------------Radio de un circulo--------------------------------

    alambre="Se necesita comprar "+(alambre)+" metro de alambre";
    alert(alambre)
     
}
function Materiales () 
{
    let largo;
    let ancho;
    let bolsaCemento;   
    let bolsaCal;
    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);
    
    bolsaCemento=((largo*ancho)*3);
    bolsaCemento="Se necesitan "+(bolsaCemento)+" bolsas de cemento";
    alert(bolsaCemento);

    bolsaCal=((largo*ancho)*2);
    bolsaCal="Se necesitan "+(bolsaCal)+" bolsas de cal";
    alert(bolsaCal);
}