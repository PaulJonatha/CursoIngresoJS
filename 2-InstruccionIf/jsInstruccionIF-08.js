/*Alumno :Paul Ramirez Benites
Ejercicio 8
*/

function mostrar()
{
    let edad;
	let Estado;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	Estado=document.getElementById("estadoCivil").value;
	
	if(Estado=="Soltero" && edad>=18)
	{
		alert("Es soltero y no es menor");
	}
       
    /*
	Ejemplo como buscar de los 3 variable es el numero menor
	let A=30;
	let B=30;
	let C=32;

	if(C<A && C<B)
	{	
		alert("C es numero mas bajo");
	}
	else if(A<C && A<B)
	{
	alert("A e sminimo");}
	else if (B<C && B<A)
	{
		alert("B es menor");
	}
	else(A==B &&)
    */

}//FIN DE LA FUNCIÓN

