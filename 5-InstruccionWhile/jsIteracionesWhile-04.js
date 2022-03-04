/*
Alumno :Paul Ramirez Benites
Ejercicio 4
Enviado
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while (numeroIngresado<0 || numeroIngresado>9) 
	{	
		
		numeroIngresado=prompt("Ingrese un numero 0 y 9 ");
	}
	numeroIngresado=parseInt(document.getElementById("txttxtIdNumero").value);
	
}//FIN DE LA FUNCIÓN	
//isNaN no es numero = si es numero es falso= si es letra = verdadero, si pongo
//isNanN (numeroingresado)==true : el numero pasa y la letra no pasa