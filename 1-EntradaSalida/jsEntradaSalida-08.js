/*
Alumno :Paul Ramirez Benites
Ejercicio 8

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    let Dividendo;
	let Divisor;
	let resto;

	Dividendo= parseInt(document.getElementById("txtIdNumeroDividendo").value);
	Divisor= parseInt(document.getElementById("txtIdNumeroDivisor").value);

	

	resto= "El resto es " + (Dividendo% Divisor);

 
	alert(resto);
	
}
