/*
Alumno :Paul Ramirez Benites
Ejercicio 10

E/S 10Bis1: Debemos lograr tomar el importe por ID.T ransformarlo a entero (parseInt)
, luego pedirle al usuario un % de descuento (USTEDES RESUELVEN COMO LE PIDEN EL NUMERO)
y mostrar el importe en el cuadro de texto "RESULTADO"

E/S 10Bis2: se debe pedir el nombre del producto al usuario,
el importe y tambien se debe pedir el porcentaje de descuento al usuario, se debe
: mostrar el importe final por ID y ademas mostrar el mensaje:
"Usted compro un XXXXXX con XX % de descuento, el precio final es XXXX" 

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
*/
function mostrarAumento()
/*{ Ejercicio antiguo
	let importe;
	let aumento=0.25;
	let resultado;
 
	importe= parseInt(document.getElementById("txtIdImporte").value);
 
	 resultado=(importe-(importe*aumento));
	 
 
   document.getElementById("txtIdResultado").value = resultado;
	 
}*/

/*{
	let importe;
	let Descuento;
	let resultado;
    

	importe=parseInt(document.getElementById("txtIdImporte").value);
	
	Descuento=prompt("Ingrese el descuento %");

	resultado=(importe-(importe*(Descuento/100)));

	document.getElementById("txtIdResultado").value = resultado;

}*/

{
	let importe;
	let producto;
	let Descuento;
	let resultado;
	let Final;
		
	importe=parseInt(document.getElementById("txtIdImporte").value);
	
	producto=prompt("Inegrese el nombre del producto");
	Descuento=prompt("Ingrese el descuento % ");

	resultado=(importe-(importe*(Descuento/100)));
	document.getElementById("txtIdResultado").value= resultado;

	Final=("Usted compro un "+ producto + " con " + Descuento+"% de descuento, el precio final es "+ resultado+"$");
	
	alert(Final);  

}


