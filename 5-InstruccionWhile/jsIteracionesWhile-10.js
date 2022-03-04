/*
Paul Ramires Benites
Ejercicio while 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{/*
	let numero;
	let numeroMinimo;
	let numeroMaximo;
	let menorPares;
	let negativos=0;
	let respuesta="si";
	let bandera=0
	 
	while (respuesta=="si") 
	{
		numero=parseInt(prompt("Ingresa un numero: "));
		while(isNaN(numero)==true){
			numero=parseInt(prompt("Error, ingrese un NUMERO "));
		}
		
		if(bandera==0 || numero>numeroMaximo)
		{
			numeroMaximo=numero;
		}
		if(bandera==0 || numero<numeroMinimo)
		{
			numeroMinimo=numero;
			bandera=1;
			if(numero<=0)
			{
			negativos=numero;
			}
		}
		if (numeroMinimo%2==0) //no terminado
		{
			menorPares=numeroMinimo;
		}


		respuesta=prompt("Desea ingresar otro numero? Escriba: si/no");
	}
		document.write("El numero maximo es: "+numeroMaximo +"<br>")
		document.write("El numero minimo es: "+numeroMinimo +"<br>")
		document.write("El numero menor de los pares es: "+menorPares +"<br>")
		document.write("El mayor delos negavitos es: "+negativos +"<br>")
		*/





  // While 2 terminado
	let Nombre; 
	let Edad;
	let Edadjoven;
	let EdadViejo;
	let Respuesta="si";
	let bandera=0
	let nombrejoven;
	let nombreViejo;

	
	while (Respuesta=="si")
	{
		Nombre=prompt("Ingrese un nombre: ");

		Edad=parseInt(prompt("Ingrese la edad de "+Nombre));
		
		while(isNaN(Edad)==true){
			Edad=parseInt(prompt("Error,Ingrese la edad de "+Nombre));
		}
		if(bandera==0)
		{
			EdadViejo=Edad;
			Edadjoven=Edad;
			nombreViejo=Nombre;
			nombrejoven=Nombre;
			bandera=1
		}
		else
		{
			if(Edad<=Edadjoven) 
			{
				Edadjoven=Edad;
				nombrejoven=Nombre;
			}
			
			else if(Edad>=EdadViejo)
			{
				EdadViejo=Edad;
				nombreViejo=Nombre;
			}
		}


		Respuesta=prompt("Ingresa otro Usuario? Escriba: si/no");
	}
		document.write(nombrejoven + " es la persona mas joven de "+Edadjoven +" años"+ "<br>");
		document.write(nombreViejo + " es la persona mas vieja de "+EdadViejo +" años"+"<br>");


	
	/*//Declarar variables 
	let respuesta="si";
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	//Contadores
	let contadorP=0;
	let contadorN=0;
	let ContadorDe0=0;
	let contadorPar=0;
	//Promedio
	let promedioP=0;
	let promedioN=0;
	let Diferencia;


	while(respuesta=="si")
	{
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		while (isNaN(numeroIngresado)==true)
		{
			numeroIngresado=parseInt(prompt("EROR404, ingrese un NUMERO:"));
		}
		if (numeroIngresado>=0) 
		{
			sumaPositivos=numeroIngresado+sumaPositivos;
			contadorP++;
			if(numeroIngresado==0)
			{
				ContadorDe0++;
			}
		}
		else if( numeroIngresado<0)
		{
			sumaNegativos=numeroIngresado+sumaNegativos;
			contadorN++;
		}
		if(numeroIngresado%2==0) //arreglado
		{
			contadorPar++;
		}

		respuesta=prompt("Desea continuar? si/no");
	}//fin del while
	
	if(contadorP >0 )
	{
		promedioP=sumaPositivos/contadorP;
	}
	
	if (contadorN >0) 
	{
		promedioN=sumaNegativos/contadorN;
	}
	Diferencia= contadorP-contadorN;


	document.write("La suma de negativos es :"+sumaNegativos + "<br>");
	document.write("La suma de postivos es :"+sumaPositivos + "<br>");
	document.write("Cantidad de positivos es :"+ contadorP + "<br>");
	document.write("Cantidad de negativos es :"+ contadorN + "<br>");
	document.write("Cantidad de de ceros es :"+ ContadorDe0 + "<br>");
	document.write("Cantidad de numero pares es :"+ contadorPar + "<br>");
	document.write("Cantidad de numero positivo de promedio es :"+ promedioP + "<br>");
	document.write("Cantidad de numero negativo de promedio es :"+ promedioN + "<br>");
	document.write("Diferencia : "+Diferencia +"<br>");*/

}//FIN DE LA FUNCIÓN