/*

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total


Simil Parcial 3:
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico)
 y si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza



*/
function mostrar()
{  /* Terminado
	let tipo;
	let nombreProducto;
	let importeProducto;
	let procedencia;
	let peso;
	let masPesado;
	let importeMasCaro;
	let importeMasBarato;
	let nombreMasCaro;
	let nombreMasBarato;
	//contador
	let contadorLimpieza=0;
	let contadorComestible=0;
	let contadorOtros=0;
	let contadorTotal;

	let promedioDePeso;
	let pesoComestible=0;
	let pesoOtros=0;
	let pesoLimpieza=0;
	let pestoTotal;
	let respuesta="si";
	let banderaPeso=0;
	let nombreMasPesado;
	let banderaMasCaro=0;
	let banderaMasBarato=0;
	let mensajeA;
	let mensajeB;
	let mensajeC;
	let mensajeD;
	let mensajeF;

	while (respuesta=="si") 
	{   
		tipo=prompt("Ingrese entre estos tipos (limpieza , comestible , otros)")
		while (tipo!="limpieza" && tipo!="comestible" && tipo!= "otros")
		{
			tipo=prompt("Error, Reingrese entre estos tipos (limpieza , comestible , otros)")
		}

	 	nombreProducto=prompt("Ingrese entre estos nombre del productos")
		while (isNaN(nombreProducto)==false)
		{
			nombreProducto=prompt("Error, Reingrese entre nombre del prodcuto")
		}
		importeProducto=parseInt(prompt("Ingrese el importe del producto (no mayor a 1000)"))
		while (importeProducto<0 || importeProducto>1000 ||isNaN(importeProducto)==true)
		{
			importeProducto=parseInt(prompt("Error, Reingrese el importe del producto (no mayor a 1000)"))
		}

		procedencia=prompt("Ingrese la procedencia del prodcuto (importado, nacional, elaborado)")
		while (procedencia!="importado" && procedencia!="nacional" && procedencia!= "elaborado")
		{
			procedencia=prompt("Error, Reingrese la procedencia del prodcuto (importado, nacional, elaborado)")
		}

		peso=parseInt(prompt("Ingrese el peso del producto (no mayor a 30 Kilos)"))
		while (peso<0 || peso>30 ||isNaN(peso)==true)
		{
			peso=parseInt(prompt("Error, Reingrese el peso del producto (no mayor a 30 Kilos)"))
		}

		switch (tipo) {
			case "comestible":
				//A
				contadorComestible++;
				pesoComestible=pesoComestible+peso;
				if (masPesado<peso || banderaPeso==0) 
				{
					masPesado=peso;
					nombreMasPesado=nombreProducto;
					banderaPeso=1;
				}
				
				break;
			case "limpieza":
				pesoLimpieza=pesoLimpieza+peso;
				contadorLimpieza++;
				break;
			case "otros":
				pesoOtros=pesoOtros+peso;
				contadorOtros++;
				break;
		}
		
		//B
		if (importeMasCaro<importeProducto || banderaMasCaro==0) 
		{
			importeMasCaro=importeProducto;
			nombreMasCaro=nombreProducto;
			banderaMasCaro=1;	
		}
		if (importeMasBarato>importeProducto  || banderaMasBarato==0 ) 
		{
			importeMasBarato=importeProducto;
			
			if(procedencia=="elaborado")//D
			{
				importeMasBarato=importeProducto;
				nombreMasBarato=nombreProducto;
				
			}
			banderaMasBarato=1;
		}


		respuesta=prompt("Queres ingresar otra mercaderia? si/no");
	}//while
	contadorTotal=contadorLimpieza+contadorComestible+contadorOtros
	pestoTotal=pesoComestible+pesoLimpieza+pesoOtros;
	promedioDePeso=pestoTotal/contadorTotal;
	
	if(contadorComestible>contadorLimpieza && contadorComestible>contadorOtros)
	{
		mensajeD="El tipo de mercaderia mas aparece es comestible con : "+contadorComestible;
	}
	else if (contadorLimpieza>contadorComestible && contadorLimpieza>contadorOtros) 
	{
		
		mensajeD="El tipo de mercaderia mas aparece es Limpieza: "+contadorLimpieza;
	}
	else 
	{
		mensajeD="El tipo de mercaderia mas aparece es otros: "+contadorOtros;
	}

	mensajeA="El nombre mas pesado de los comestible: "+nombreMasPesado;
	mensajeB="El nombre mas caro de todos los productos :"+ nombreMasCaro;
	mensajeC="El nombre mas barato delos elaborados : "+ nombreMasBarato;
	//mensajeD="El tipo de mercaderia que mas aparece : "+mercaderiaMasAparece;
	mensajeF="El promedio de peso por cada tipo ingresado:" +promedioDePeso;
	
	alert(mensajeA+"\n"+mensajeB+"\n"+mensajeC+"\n"+mensajeD+"\n"+mensajeF);*/




	/*let tipo;
	let razaPerro;
	let razaGato;
	let otro;
	let edadPerroYGato=0;
	let edadOtros=0;
	let edadPajaro=0;
	let masviejo;
	let nombreMasviejo;
	let bandera=0;
	

	for(let i=0; i<2; i++)
	{
		tipo=prompt("Ingrese el tipo de mascota entre ( gato , perro , pájaro y otros)");
		while (tipo!="gato" && tipo!="perro" && tipo!="pajaro" && tipo!="otros") 
		{
			tipo=prompt("Erorr,Ingrese el tipo de mascota entre ( gato , perro , pájaro y otros)");
		
		}

		if(tipo=="gato")
	    {
			razaGato=prompt("Ingrese la raza del gato (siamés, turco, peterbald , generico) ");
			while (razaGato!= "siames" && razaGato!= "turco" &&razaGato!= "peterbald" && razaGato!= "generico" )
			{
				razaGato=prompt("Error,Ingrese la raza del gato (siamés, turco, Peterbald , generico) ");
			}
			edadPerroYGato=parseInt(prompt("Ingrese la edad del gato entre 1 y 20:"));
			while (edadPerroYGato<1 || edadPerroYGato>20 || isNaN(edadPerroYGato)==true) 
			{
				edadPerroYGato=parseInt(prompt("Erorr, Ingrese la edad del gato entre 1 y 20:"));
			}
		}
		else if(tipo=="perro")
		{
			razaPerro=prompt("Ingrese la raza del perro (pastor, toy, callejero) ");
			while (razaPerro!= "pastor" && razaPerro!= "toy" &&razaPerro!= "callejero" )
			{
				razaPerro=prompt("Error, Ingrese la raza del perro (pastor, toy, callejero) ");
			}
			edadPerroYGato=parseInt(prompt("Ingrese la edad del perro entre 1 y 20:"));
			while (edadPerroYGato<1 || edadPerroYGato>20 || isNaN(edadPerroYGato)==true) 
			{
				edadPerroYGato=parseInt(prompt("Erorr, Ingrese la edad del perro entre 1 y 20:"));
			}
		}		

		switch (tipo) 
		{
			case "perro":
			
				break;
			case "gato":

				break;
			case "otros":
				edadOtros=parseInt(prompt("Ingrese la edad de su mascota entre 1 y 100:"));
				while (edadOtros<1 || edadOtros>100 || isNaN(edadOtros)==true) 
				{
					edadOtros=parseInt(prompt("Erorr, Ingrese la edad de su mascota entre 1 y 100:"));
				}
				break;
			case "pajaro":
				edadPajaro=parseInt(prompt("Ingrese la edad de su mascota entre 1 y 50:"));
				while (edadPajaro<1 || edadPajaro>50 || isNaN(edadPajaro)==true) 
				{
					edadPajaro=parseInt(prompt("Erorr, Ingrese la edad de su mascota entre 1 y 50:"));
				}
				break;	
		}
		//falta terminar
		alert(edadPajaro+"o"+ edadOtros);
		if(masviejo<edadPerroYGato || bandera==0 )
		{
			masviejo=edadPerroYGato;
			
			if (tipo=="perro") 
			{
				nombreMasviejo=tipo;
			}
			else 
			{
				nombreMasviejo=tipo
			}
			
			bandera=1
		}
		alert(nombreMasviejo);
	
	}*/
	


	/*let i;
	let Tipo;
	let Precio;
	let Cantidad;
	let alcoholMasBarato;
	let alcoholFabricante;
	let CantidadAlcohol;
	let AcumuladorAlcohol=0;
	let AcumuladorBarbijo=0;
	let AcumuladorJabon=0;
	let contadorAlcohol=0;
	let contadorBarbijo=0;
	let contadorJabon=0;
	let Marca;
	let Fabricante;
	let Promedio;
	let Bandera=0;
	let mensajeA;
	let mensajeB;
	let mensajeC;

	

	for(i=0; i<2; i++)
	{
		Tipo=prompt('Ingrese el tipo: "barbijo" , "jabon" o "alcohol"');

		while (Tipo !="barbijo" && Tipo !="jabon" && Tipo !="alcohol")
		{
			Tipo=prompt('Erorr,Ingrese el tipo: "barbijo" , "jabon" o "alcohol"');
		}

		Precio=parseFloat(prompt("Ingrese el precio del tipo, entre(100 y 300)$"));
		while (Precio<100 || Precio>300 || isNaN(Precio)) 
		{
			Precio=parseFloat(prompt("Error,Ingrese el precio del tipo, entre(100 y 300)$"));	
		}
		Cantidad=parseInt(prompt("Ingrese la cantidades de los tips maximo 1000! "));
		while (Cantidad<=0 || Cantidad>1000 || isNaN(Cantidad))
		{
			Cantidad=parseInt(prompt("Error, Ingrese la cantidades de los tips maximo 1000! "));
		}
		Marca=prompt("Ingrese marca");
		Fabricante=prompt("Ingrese Fabricante");

		/*a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		b) Del tipo con mas unidades el precio
		c) Cuántas unidades de jabones hay en total	

		switch (Tipo) {
			case "alcohol":
				AcumuladorAlcohol=Cantidad+AcumuladorAlcohol;
				contadorAlcohol++;
				if(alcoholMasBarato>Precio || Bandera==0)
				{
					alcoholMasBarato=Precio;
					alcoholFabricante=Fabricante
					CantidadAlcohol=Cantidad;
					
					Bandera=1;
				}
				break;
		
			case"barbijo":
				AcumuladorBarbijo=Cantidad+AcumuladorBarbijo;
				contadorBarbijo++;
				break;
			case"jabon":
				AcumuladorJabon=Cantidad+AcumuladorJabon;
				contadorJabon++;
				break;				
		}
	}

	if(AcumuladorAlcohol>AcumuladorBarbijo && AcumuladorAlcohol>AcumuladorJabon)
	{
		mensajeB=mensajeB;//"El tipo con mas unidades es : "+ Precio+"$";
	}
	else if (AcumuladorBarbijo>AcumuladorAlcohol && AcumuladorBarbijo>AcumuladorJabon)
	{
		mensajeB=mensajeB;//"El tipo con mas unidades es : "+Precio+"$";
	}
	else
	{
		mensajeB=mensajeB//"El tipo con mas unidades es : "+Precio+"$";
	}

	mensajeA="El alcohol mas barato : " +alcoholMasBarato;
	mensajeB="El tipo con mas unidades es : "+Precio+"$";
	mensajeC="Unidades de jabon: " + AcumuladorJabon;
	
	alert(mensajeA+"\n"+mensajeB+"\n"+mensajeC+"\n"); */

}
/*
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumuladorBarbijo=0;
	let acumuladorAlcohol=0;
	let acumuladorJabon=0;
	let contBarbijo=0
	let contAlcohol=0;
	let contJabon=0;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let promedioCompra;
	let mayorTipo;
	let banderaAlcohol=0; //bandera
	let mesajeAlcohol="No se compraron alcohol";
	let mesajeAlBarbijo;
	let mesajeAlJabon;


	
	for(let i=0; i<3;  i++)
	{
		tipo=prompt('Ingrese tipo "barbijo" , "jabon" o "alcohol"');
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"  )
		{
			tipo=prompt('Error. Ingrese tipo "barbijo" , "jabón" o "alcohol"');
		}
	//----------------------------------------------------------------------------
		precio=parseFloat(prompt("Ingrese el precio entre 100 y 300 : "));
		while(precio<100 || precio>300 || isNaN(precio))
		{
			precio=parseFloat(prompt("Error.Ingrese el precio entre 100 y 300 : "));
		}
	//----------------------------------------------------------------------------
		cantidad=parseInt(prompt("Ingrese cantidad maximo 1000 : "));
		while(cantidad<=0 	|| cantidad>1000 || isNaN(cantidad))
		{
			cantidad=parseInt(prompt("Error.Ingrese cantidad maximo 1000 : "));
		}
	//----------------------------------------------------------------------------
		marca=prompt('Ingrese marca: ');
		fabricante=prompt('Ingrese fabricante: ');
		
		switch(tipo)
		{
			case"alcohol":
				acumuladorAlcohol=cantidad+acumuladorAlcohol;
				contAlcohol++;
				if(banderaAlcohol==0 || precioAlcoholBarato>precio)
				{ 
				precioAlcoholBarato=precio;	//actualizo el precio del alcohol baroto
				cantidadAlcoholBarato=cantidad;
				fabricanteAlcoholBarato=fabricante;
				banderaAlcohol=1;
				}
				break;
			case"barbijo":
				acumuladorBarbijo=cantidad+acumuladorBarbijo;
				contBarbijo++;
				break;
			case"jabon":
				acumuladorJabon=cantidad+acumuladorJabon;
				contJabon++;
				break;
		}
	}//For
	
	if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		mayorTipo="Alcohol"
		promedioCompra= acumuladorAlcohol/contAlcohol;
	}
	else if(acumuladorBarbijo> acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
	{
		mayorTipo="Barbijo"
		promedioCompra= acumuladorBarbijo/contBarbijo;
	}
	else
	{
		mayorTipo="Jabon"
		promedioCompra= acumuladorJabon/contJabon;
	}

	if(banderaAlcohol==1)
	{
		mesajeAlcohol="Fabricante alcohol barato: "+ fabricanteAlcoholBarato + "\n Cantidad"
		+ cantidadAlcoholBarato + "\n Precio: "+precioAlcoholBarato;
	}
	
	mesajeAlBarbijo="B - Tipo con mas unidades: "+tipo +" Promedio: "+ promedioCompra;
	mesajeAlJabon= "C- Unidades de jabon: "+acumuladorJabon;
	
	alert(mesajeAlcohol+"\n"+mesajeAlBarbijo+"\n"+mesajeAlJabon);*/