/*
Alumno :Paul Ramirez Benites
Ejercicio 7
Enviado
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador=0;
	let acumulador;
	let respuesta; // do while           // solo while let respuesta="S";
	//let i=0;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	//respuesta='si';

	//numeroIngresado=parseInt(prompt("Ingrese un numero: "));

 /*	while (respuesta=="s") {
		numeroIngresado=parseInt(prompt("Ingrese un numero "+ i));
		respuesta=prompt("Ingresa otro numero? s/n");

		//acumulador=acumulador+numeroIngresado;
		
		
	} Otra opcion */

	
		do {
			numeroIngresado=parseInt(prompt("Ingrese un numero "));
			respuesta=prompt("Ingresa otro numero? s/n");
			acumulador=acumulador+numeroIngresado;
			contador++;

		} while (respuesta=="s");
		
		promedio=acumulador/contador;
		


	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN