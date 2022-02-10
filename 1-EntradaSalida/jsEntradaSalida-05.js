/*

Alumno :Paul Ramirez Benites
Ejercicio 5
Enviado
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
/*
{	Ejercicio anterior
    let nombre;
	let edad;
	let Mostrarresultado;
	

	nombre= document.getElementById("txtIdNombre").value;
	edad= document.getElementById("txtIdEdad").value;

     //El + para encadenar entre un texto y una variable

     //Lo ideal es usar asi 
	 Mostrarresultado= "Usted se llama " + nombre +" y tiene " + edad + " años";
	 alert(Mostrarresultado)

     //otra fomar de usar
	 //alert ("Usted se llama " + nombre +" y tiene " + edad + " años"); 
}*/


{
let nombre;
let edad;
let Mostrarresultado;
let apellido;
   
apellido=prompt("Ingrese apellido");
nombre= document.getElementById("txtIdNombre").value;
edad= document.getElementById("txtIdEdad").value;

 Mostrarresultado= apellido + ", usted se llama " + nombre +" y tiene " + edad + " años";
 alert(Mostrarresultado);

 }



