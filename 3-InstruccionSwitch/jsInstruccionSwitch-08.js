/* 
Alumno: Paul Ramirez Benites
Ejercicio  con if 8
Enviado
*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById("txtIdDestino").value;

	if (destinoIngresado=="Bariloche" || destinoIngresado=="Ushuaia")
	{
		mensaje="Hace frio.";
	}
	else
	{
		mensaje="Hace calor";
	}
	alert(mensaje);

	/*let destinoIngresado 

	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert("Hace frio");
			break;
		case "Cataratas":
			alert("Hace calor");
			break;
		case "Mar del plata":
			alert("Hace calor");
		 	break;	
		case "Ushuaia":
			alert("Hace frio");
			break;
	}*/
}//FIN DE LA FUNCIÓN