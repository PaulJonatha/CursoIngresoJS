/*
Paul Ramirez Benites
Enviado
*/
function mostrar()
{
	
	let sexo;
	let nota;
	let promedioTotal;
	let contadorPromedio=0;
	let notaMasBaja;
	let sexoNotabaja;
	let bandera=0;
	let cantidadDeM;
	let contadorM=0;
	let sumarNota=0;
	let mensajePromedio;
	let mensajeCantidadVarone;
	let mensajeNotaBaja;
	
	for(let i=0; i<7; i++ )
	{
		//Nota----------------------------------------------------------------------------
		nota=parseFloat(prompt("Ingrese la nota del alumno de (1 a 10): "));
		while(nota<0  || nota>10 || isNaN(nota))
		{
		nota=parseFloat(prompt("Error, Ingrese la nota del alumno de (1 a 10): "));
		}
		//Sexo----------------------------------------------------------------------------
		sexo=prompt("Ingrese el sexo del alumno (m o f):");
		while (sexo !="m" && sexo!="f") 
		{
			sexo=prompt("Error, Ingrese el sexo del alumno (m o F):");
		}
		//Cantidad masculino y nota mayor a 6----------------------------------------------
		if(sexo=="m" && nota >=6)
		{
			contadorM++;
			cantidadDeM=contadorM;
		}
		//Nota baja-------------------------------------------------------------------------
		if(bandera==0  ||notaMasBaja>nota )
		{
			sexoNotabaja=sexo;
			notaMasBaja=nota;
			console.log(notaMasBaja);
			bandera=1;
		}
			
		/*if(nota>=6 )//No va
		{
			cantidadDeV=contadorV;

		}*/
		

		sumarNota=nota+sumarNota;
		console.log(sumarNota);
		contadorPromedio++;
		console.log(contadorPromedio);
			
	}
		
	promedioTotal=sumarNota/contadorPromedio;
	console.log(promedioTotal);
	mensajePromedio="A-El promedio de las notas totales es: " + promedioTotal;
	
	mensajeNotaBaja="B-La nota mas baja es : "+notaMasBaja+" y el sexo: "+sexoNotabaja;
	
	mensajeCantidadVarone="C-La cantidad de varones que aprobaron fueron: "+cantidadDeM+ " con la nota mas de 6 "; 

	
	alert(mensajePromedio+"\n"+mensajeNotaBaja+"\n"+mensajeCantidadVarone);


	/*if(bandera==0)
	{
		notaMasBaja=nota;
		notaMasAlta=nota;
		sexoNotabaja=sexo;
		bandera=1;
		//console.log(notaMasBaja);
	}
	else
	{
		if(nota<notaMasBaja )//Arreglar error nota mas baja
		{
			sexoNotabaja=sexo;
			notaMasBaja=nota;
			console.log(notaMasBaja)
			mensaje="La nota mas baja es : "+notaMasBaja+" y el sexo: "+sexoNotabaja;
			alert(mensaje);
		}
		
		if(notaMasAlta>=6)
		{
			cantidadDeV=contadorV;
			mensaje="La cantidad de varones que aprobaron fueron: "+cantidadDeV+ " con la nota mas de 6 "; //+sumarNota;
			alert(mensaje);
		}
	}*/








	/*let numero;
	let i;

	numero=parseInt(prompt("Ingrese un numero"));
	
	for (i=1; i>0; i++ ) //Bucle infinito o (i=1; i=1; i++ ) (i=1; ; i++ )  
	{
		numero=parseInt(prompt("Ingrese un numero"));
		alert(i);
		if(numero==9)
		{
			break;
		}
	}*/

}//FIN DE LA FUNCIÓN