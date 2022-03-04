/*
Alumno :Paul Ramirez Benites
Ejercicio 5
Enviado
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	
	while (sexoIngresado!="f"&& sexoIngresado!="m") 
	{
		sexoIngresado=prompt("Error, ingrese f o m");
	}
	document.getElementById("txtIdSexo").value=sexoIngresado;
}//FIN DE LA FUNCIÓN