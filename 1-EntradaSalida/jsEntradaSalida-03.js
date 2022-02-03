/*
Alumno :Paul Ramirez Benites
Ejercicio 3
Enviado

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar()
{
	var nombreIngresado;

	nombreIngresado=txtIdNombre.value;
	alert(nombreIngresado);
	txtIdNombre.value = ""; //Para sacar el nombre ingresado al terminar.
	

}


