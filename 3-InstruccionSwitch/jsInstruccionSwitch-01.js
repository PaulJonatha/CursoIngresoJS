/* 
Alumno: Paul Ramirez Benites
Ejercicio 1
Enviado
*/
function mostrar()
{
	let mesDelAnio 
	mesDelAnio=document.getElementById("txtIdMes").value;

	switch (mesDelAnio) {
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case"Marzo":
			alert("a clases!!!.");
			break;
		case"Julio":	
			alert("se vienen las vacaciones!!!.");
			break;
		case"Diciembre":
			alert("Felices fiesta!!!.");
			break;
	}
}//FIN DE LA FUNCIÓN