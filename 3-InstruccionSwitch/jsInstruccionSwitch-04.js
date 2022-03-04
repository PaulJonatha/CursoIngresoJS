/* 
Alumno: Paul Ramirez Benites
Ejercicio 4
Enviado
*/
function mostrar()
{
	let mesDelAnio; 
	mesDelAnio=document.getElementById("txtIdMes").value;
	
	switch (mesDelAnio) 
	{
		case "Febrero":
			alert("Este mes tiene 28 días");
			break;
		case "Abril":
		case "Junio":	
		case "Julio":	
		case "Septiembre":			
		case "Noviembre":
			alert("Este mes tiene 30 dias");
			break;	
		default:
			alert("Este mes tiene 31 dias");
			break;
	}
}//FIN DE LA FUNCIÓN