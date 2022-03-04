/*
Alumno :Paul Ramirez Benites
Ejercicio 8
Enviado
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let respuesta="si";
	let sumaPositivos=0;
	let multiplicacionNegativos=1;
	let contador=0;


	/*do {
		numero=parseInt(prompt("Ingrese un numero positivo o negativo: "));
		respuesta=prompt("Ingresar otro numero? si o no");

		if(numero>0){
			sumaPositivos=numero+sumaPositivos;
			
		}
		else 
		{
			contador=1;
			multiplicacionNegativos=numero*multiplicacionNegativos;
			
		}
		
		} while (respuesta=="si");*/
	

	while (respuesta=="si") 
	{
		numero=parseInt(prompt("Ingrese un numero positivo o negativo: "));
		respuesta=prompt("Ingresar otro numero?");
		if(numero>=0)
		{
			sumaPositivos=numero+sumaPositivos;	
		}
		else 
		{	
			contador=1;
			multiplicacionNegativos=numero*multiplicacionNegativos;
		}
		
	}
	if(contador == 0)
	{ 
		multiplicacionNegativos=0;
	}
	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN