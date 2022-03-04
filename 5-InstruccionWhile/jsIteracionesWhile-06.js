/*Alumno :Paul Ramirez Benites
Ejercicio 5
Enviado*/
function mostrar()
{
	//var contador;
    /*contador= contador+1;		//Contador
	acumulador=acumulador+numeroIngresado; //Acumulador
	acumulador=numeroIngresado;  //asignacion */
	let acumulador;
	let numeroIngresado;
	let promedio;
	let i=0;

	contador=0;
	acumulador=0;
	 
	while (i<5) {
		numeroIngresado=parseInt(prompt("Ingrese 5 numeros, numero: "+ i));
		acumulador=acumulador+numeroIngresado;
		i= i + 1; // O tambien i++
		// Esto esta mal no se puede poner ahi por que repite 5 veces
		//promedio= acumulador /5
	}
		promedio = acumulador/5;
	
		document.getElementById("txtIdSuma").value=acumulador;
		document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN