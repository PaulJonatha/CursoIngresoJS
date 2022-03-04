/* 
Alumno: Paul Ramirez Benites
Ejercicio 7
Enviado
*/
function mostrar()
{
	let destinoIngresado 

	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert("Esta en el Oeste");
			break;
		case "Cataratas":
			alert("Esta en el Norte");
			break;
		case "Mar del plata":
			alert("Esta en el Este");
		 	break;	
		case "Ushuaia":
			alert("Esta en el Sur");
			break;
	}
}//FIN DE LA FUNCIÓN