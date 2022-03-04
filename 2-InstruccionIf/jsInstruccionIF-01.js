/*Alumno :Paul Ramirez Benites
Ejercicio 1
*/
function mostrar()

{
	let nombre;
	let	datosP;
	let	datosA;
	let IMC;
	nombre =prompt("Ingrese nombre: ");
	datosP= parseFloat(prompt("Ingrese peso: "));
	datosA= parseFloat(prompt("Ingrese Altura: "));

	IMC=datosP/(datosA*datosA);

	
	if(IMC<18.5)
	{
		alert("Peso bajo, tu IMC es: "+ IMC);
	}
	else if (IMC>18.5 && IMC<24.9)
	{
		alert("Peso normal, tu IMC es: "+ IMC);
	}
	else if(IMC>25 && IMC<26.9)
	{
		alert("Pre obesidad, tu IMC es: "+ IMC);
	}
	else if(IMC>27 && IMC<29.9)
	{
		alert("obesidad I, tu IMC es: "+ IMC);
	}
	else if(IMC>30 && IMC<34.9)
	{
		alert("obesidad II, tu IMC es: " + IMC);
	}
	else 
	{
		alert("Obesidad III, tu IMC es: "+ IMC);
	}


	/*let Distacia;
	let Tiempo;
	let Velocidad;

		Distacia=prompt("Distacia que viajo");
		
		Tiempo=prompt("Tiempo que viajo");
		
		Velocidad=Distacia/Tiempo;

		if(Velocidad<=60)
		{
			alert("Muy lento");
		}
		else if(Velocidad >=61 && Velocidad<=80)
		{
			alert("Lento");
		}
		else if(Velocidad>=81&&Velocidad<=100)
		{
			alert("Bueno ripmo");
		}
		else if(Velocidad>=101&&Velocidad<=120)
		{
			alert("Ahi de la ley")
		}
		else
		{
			alert("Eso nose hace");
		}*/
	//tomo la edad  
	/*let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad==15)
	{
		 alert("Ñiña bonita");
	}*/

}//FIN DE LA FUNCIÓN