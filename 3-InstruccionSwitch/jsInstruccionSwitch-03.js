/* 
Alumno: Paul Ramirez Benites
Ejercicio 3
enviado
*/
function mostrar()
{
	//tomo el mes
	let mesDelAnio;
	mesDelAnio =document.getElementById("txtIdMes").value;
	switch (mesDelAnio) 
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 días");
			
			break;
	
		default:
			alert("Este mes tiene 30 o mas días");
			break;
	}
}//FIN DE LA FUNCIÓN