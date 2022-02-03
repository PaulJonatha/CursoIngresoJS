/*

Alumno :Paul Ramirez Benites
Ejercicio 5

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
{	
    let nombre;
	let edad;

	nombre= document.getElementById("txtIdNombre").value;
	edad= document.getElementById("txtIdEdad").value;

     //El + para encadenar entre un texto y una variable
	 alert ("Usted se llama " + nombre +" y tiene " + edad + " años");

	 document.getElementById("txtIdNombre").value = ""; //Para sacar el nombre ingresado al terminar.
	
	 document.getElementById("txtIdEdad").value = "";   //Para sacar la edad ingresado al terminar.

	
}

