/* 
Alumno: Paul Ramirez Benites
Ejercicio 2
enviado
*/
function mostrar()
{
	let mesDelAnio;

	mesDelAnio=document.getElementById("txtIdMes").value;

	switch (mesDelAnio) {
		case "Julio":
		case"Agosto":
			alert("Abrigate que hace frio.");
			break;
		case"Septiembre":	
			//alert("Ya pasamos el frio, ahora calor!!!.");Cuando sacamo el break baja y continua hasta encontrar el break
			//break;
		case"Octubre":
		case"Nomviembre":
		case"Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
	
		default:
			alert("Falta para el invierno.");
	
			break;
 }
}