/*
Paul Ramirez Benites
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar) 
la temperaruta mínima que se registra en su territorio(entre -50 y 50) 
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados    
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
i) que continente tiene mas habitantes.
*/
function mostrar()
{
	let nombre;
	let sexo;
	let edadAdolecente;
	let edadÑiño;
	let altura;
	let temperarutaCorporal;
	let respuesta="si";
	let temperarutaAlta;
	let nombreConTemperaturaAlta;
	let banderaTemperatura=0;

	let banderaMujerMasJoven=0;
	let edadMasJoven;
	let nombreMasjoven;
	let alturaMasBaja;
	let banderaAlturaBaja=0;
	let nombreMasBaja;
	let cantidadDeHombres=0;
	let cantidadDeMujeres=0;
	let PromedioH=0;
	let acumuladorEdadHombre=0;
	let acumuladorEdadMujeres=0;
	let promedioM=0;
	let cantidadDePersonasAltas=0;
	let porcentajeDeMujeres;
	while (respuesta=="si") 
	{
		nombre=prompt("Ingrese su nombre: ");
		while (isNaN(nombre)==false)
		{
			nombre=prompt("Erorr,Reingrese su nombre: ");
		}

		sexo=prompt("Ingrese su sexo (m , f)");
		while(sexo!="m" && sexo!="f")
		{
			sexo=prompt("Error,Reingrese su sexo (m , f)");
		}

		altura=parseFloat(prompt("Ingrese su altura"));
		while(altura<0|| altura>200|| isNaN(altura)==true)
		{
			altura=parseFloat(prompt("Error,Reingrese su altura "));
		}

		temperarutaCorporal=parseFloat(prompt("Ingrese su temperarutaCorporal entre 34 y 42 grados"));
		while(temperarutaCorporal<34|| temperarutaCorporal>42|| isNaN(temperarutaCorporal)==true)
		{
			temperarutaCorporal=parseFloat(prompt("Error,Reingrese su temperarutaCorporal entre 34 y 42 grados"));
		}

		switch(sexo)
		{
			case"m":
				cantidadDeHombres++ 

				edadÑiño=parseInt(prompt("Ingrese su edad del ñiño( mayor de 1 a 11 años)"));
				while(edadÑiño<1|| edadÑiño>11 || isNaN(edadÑiño)==true)
				{
					edadÑiño=parseInt(prompt("Error,Reingrese su edad Ñiño (mayor de 1 a 11 años)"));
				}

				if(alturaMasBaja>altura || banderaAlturaBaja==0)//B
				{
					alturaMasBaja=altura;
					nombreMasBaja=nombre;
					banderaAlturaBaja=1;
				}
				acumuladorEdadHombre=acumuladorEdadHombre+edadÑiño;
				break;
			case"f":
				cantidadDeMujeres++;
				edadAdolecente=parseInt(prompt("Ingrese su edad( mayor de 12 y 18 años)"));
				while(edadAdolecente<12|| edadAdolecente>18 || isNaN(edadAdolecente)==true)
				{
					edadAdolecente=parseInt(prompt("Error,Reingrese su edad (mayor de 12 y 18 años)"));
				}

				if(edadMasJoven>edadAdolecente || banderaMujerMasJoven==0)//B
				{
					edadMasJoven=edadAdolecente;
					nombreMasjoven=nombre;
					banderaMujerMasJoven=1;
				}
				acumuladorEdadMujeres=edadAdolecente+acumuladorEdadMujeres;
				break;
		}

		if(cantidadDeHombres>0)
		{
			PromedioH=acumuladorEdadHombre/cantidadDeHombres;
		}
		if (cantidadDeMujeres>0) 
		{
			promedioM=acumuladorEdadMujeres/cantidadDeMujeres;
		}
		if(temperarutaAlta<temperarutaCorporal || banderaTemperatura==0)//A
		{
			temperarutaAlta=temperarutaCorporal;
			nombreConTemperaturaAlta=nombre;
			banderaTemperatura=1;
		}
		//F
		if(altura>=1.60)
		{
			cantidadDePersonasAltas++;
		}
		
		

		respuesta=prompt("Desea ingresar otro dato? si/no");
	}
	porcentajeDeMujeres=cantidadDeMujeres*100/cantidadDePersonasAltas
	
	alert(temperarutaAlta+" "+nombreConTemperaturaAlta);
	alert(nombreMasBaja+" "+alturaMasBaja);
	alert(PromedioH);
	alert(promedioM);
	alert(cantidadDePersonasAltas);
	alert(porcentajeDeMujeres);


	/* semi-terminado
	let nombre;
	let situacionLaboral;
	let cantidadDeMaterias;
	let sexo;
	let nota;
	let edadÑiño;
	let respuesta="si";
	let mejorNota;
	let nombreMejorNota;
	let edadMasVieja;
	let nombreMasVieja;
	let bandera=0;
	let banderaedad=0;
	let cantidadSituacionLaboral=0;
	let acumuladorDeNota=0;
	let banderaMateria=0;
	let nombreMenosMateria;
	let edadMenosMateria;
	let NombreBuscandoTrabajo;
	let cursandoMenosMateria;

	while(respuesta=="si")
	{
		nombre=prompt("Ingrese su nombre: ");
		while (isNaN(nombre)==false)
		{
			nombre=prompt("Erorr,Reingrese su nombre: ");
		}

		situacionLaboral=prompt("Ingrese su situacionLaboral entre  (buscando, trabajando o solo estudiante): ");
		while (situacionLaboral!="buscando"&& situacionLaboral!="trabajando"&& situacionLaboral!="solo estudiante")
		{
			situacionLaboral=prompt("Error,Reingrese su situacionLaboral entre  (buscando, trabajando o solo estudiante): ");
		}
		
		cantidadDeMaterias=parseInt(prompt("Ingrese cantidad de materias (mas de 0 y menos de 8)"));
		while (cantidadDeMaterias<0 || cantidadDeMaterias>8 || isNaN(cantidadDeMaterias)==true) 
		{
			cantidadDeMaterias=parseInt(prompt("Error, Reingrese cantidad de materias (mas de 0 y menos de 8)"));
		}

		sexo=prompt("Ingrese su sexo (m , f o no binario)");
		while(sexo!="m" && sexo!="f "&& sexo!="no binario")
		{
			sexo=prompt("Error,Reingrese su sexo (m , f o no binario)");
		}

		nota=parseInt(prompt("Ingrese su promedio (entre 0 y 10)"));
		while(nota<0 || nota>10||isNaN(nota)==true)
		{
			nota=parseInt(prompt("Error, ingrese su promedio (entre 0 y 10)"));
		}

		edad=parseInt(prompt("Ingrese su edad( mayor de 17 años)"));
		while(edad<19|| edad>85 || isNaN(edad)==true)
		{
			edad=parseInt(prompt("Error,Reingrese su edad (mayor de 17 años)"));
		}

		switch (situacionLaboral)
		{
			case "buscando":

				NombreBuscandoTrabajo=nombre;//esta mal
				//el if esta bien
				if(cursandoMenosMateria>cantidadDeMaterias|| banderaMateria==0)
				{
					cursandoMenosMateria=cantidadDeMaterias;
					nombreMenosMateria=nombre
					edadMenosMateria=edad;
					banderaMateria=1;
				}
		
				break;
		
			case "trabajando":
				
				
				break;
			case "solo estudiante":
				if (mejorNota<nota || bandera==0) 
				{
					mejorNota=nota;
					nombreMejorNota=nombre;
					bandera=1;
				}
				if (edadMasVieja<edad || banderaedad==0) 
				{
					edadMasVieja=edad;
					console.log(edadMasVieja);
					nombreMasVieja=nombre;
					banderaedad=1;
				}
				
				break;

		}
		acumuladorDeNota=nota+acumuladorDeNota;
		cantidadSituacionLaboral++;


		respuesta=prompt("Desea ingresar otro dato? si/no");

	}

	promedioLaboral=acumuladorDeNota/cantidadSituacionLaboral;

	alert(mejorNota);
	alert(nombreMejorNota);
	alert(nombreMasVieja+"mas vieja");
	alert(promedioLaboral);
	alert("Nombre con menos materia: "+ nombreMenosMateria+" edad: "+ edadMenosMateria+ " y el nombre que esta buscando trabajo: "+ NombreBuscandoTrabajo);*/


	/*let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let sexo;
	const PRECIO=600;
	let respuesta="si";
	let cantidadMayores60=0;
	let nombreMujerMasJoven;
	let acumuladorViajeTotal;
	let cantidadPersonasTotal=0;
	let edadMasJoven;
	let temperaturaFemeninoMasJoven;
	let precioConDescuento;
	let descuento;
	let banderaM=0;



	while(respuesta=="si")
	{
		nombre=prompt("Ingrese su nombre: ");
		while (isNaN(nombre)==false)
		{
			nombre=prompt("Erorr,Reingrese su nombre: ");
		}

		obraSocial=prompt("Ingrese su obra solcial entre  (PAMI, OSDE o otras)");
		while(obraSocial!="pami"&& obraSocial!="osde" && obraSocial!="otras")
		{
			obraSocial=prompt("Erorr,Reingrese su obra solcial entre  (PAMI, OSDE o otras)");
		}

		edad=parseInt(prompt("Ingrese su edad( mayor de 17 años)"));
		while(edad<17|| edad>105 || isNaN(edad)==true)
		{
			edad=prompt("Erorr,Reingrese su edad (mayor de 17 años)");
		}
		temperatura=parseInt(prompt("Ingrese su temperatura entre(34 a 42)"));
		while(temperatura<34|| temperatura>42|| isNaN(temperatura)==true)
		{
			temperatura=prompt("Erorr,ReIngrese su temperatura entre(34 a 42)");
		}

		sexo=prompt("Ingrese su sexo (m o f)");
		while(sexo!="m"&& sexo!="f")
		{
			sexo=prompt("Erorr,Reingrese su sexo (m o f)");
		}
		//A
		switch (obraSocial)
		{
			case "pami":

				if(sexo=="f")//B
				{
					if(edadMasJoven>edad || banderaM==0)
					{
						edadMasJoven=edad;
						nombreMujerMasJoven=nombre;
						temperaturaFemeninoMasJoven=temperatura;
						banderaM=1;
					}

				}

				break;
		
			case"osde":
				if(edad>=60)
				{
					cantidadMayores60++;
				}
				break;
			case"otras":
				break;	
		}
		//C
		cantidadPersonasTotal++;

		acumuladorViajeTotal=PRECIO*cantidadPersonasTotal;

		respuesta=prompt("Queres ingresar otro dato? si/no");
	}
	
	//d) si hay más del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
	//FALTA TERMINAR LA D
	alert(edadMasJoven);
	alert(nombreMujerMasJoven+""+temperaturaFemeninoMasJoven);
	alert(acumuladorViajeTotal);
	alert(precioConDescuento);*/


	/*  NO TERMINADO 
	let continente;
    let pais;
    let cantidadDeHabitantes;
    let nivelDePobreza;
    let temperaturaTerritorio;
	let cantidadTemperaturaPares=0;
	let cantidadTemperaturaImparesEuropa=0;
	let acumuladorMenorHabitantes;
	let cantidadDePaisesMax40grados=0;
	let cantidadDePaisesAmericaMenos0=0;
	let cantidadDePaisIngresado=0;
	let acumuladorHabitantes;
	let paisMenosHabitantes;
	let banderaHabitantes=0


    
    for(let i=0; i<2; i++)
    {
        continente=prompt("Ingresa estos contienentes: america , asia , europa ,africa y oceania");
        while (continente !="america"&& continente !="asia" && continente !="europa" && continente !="africa"&& continente !="oceania") {
            
            continente=prompt("Erorr,Ingresa estos contienentes: america , asia , europa ,africa y oceania");
        }
		pais=prompt("Ingresa un pasi del continente: ");
		while(isNaN(pais)==false)
		{
			pais=prompt("Erorr,Ingresa un pais del continente: ");
		}
		cantidadDeHabitantes=parseInt(prompt("Ingrese cantidad de habitantes entre 1 y 7000 "));
		while(cantidadDeHabitantes<1 || cantidadDeHabitantes>7000 || isNaN(cantidadDeHabitantes)==true)
		{
			cantidadDeHabitantes=parseInt(prompt("Erorr,Ingrese cantidad de habitantes entre 1 y 7000 "));
		}
		nivelDePobreza=prompt("Ingrese nivel pobresa entre(pobre, rico , muy rico):");

		while(nivelDePobreza!="pobre" && nivelDePobreza!="rico" && nivelDePobreza!="muy rico")
		{
			nivelDePobreza=prompt("Erorr,Ingrese nivel pobresa entre(pobre, rico , muy rico):");
			if(nivelDePobreza=="pobre" && continente=="europa")
			{
				alert("Erorr,en europa no hay pobres):");
			}
		}
		temperaturaTerritorio=parseFloat(prompt("Ingrese Temperatura territorial (entre -50 y 50) "));
		while(temperaturaTerritorio<-50 || temperaturaTerritorio>50 || isNaN(temperaturaTerritorio)==true)
		{
			temperaturaTerritorio=parseFloat(prompt("Erorr,Ingrese Temperatura territorial (entre -50 y 50) "));
		}
		//A
		if(temperaturaTerritorio%2==0)
		{
			cantidadTemperaturaPares++;
		}
		//B
		if(temperaturaTerritorio%2==1 && continente=="europa")
		{
			cantidadTemperaturaImparesEuropa++;
		}
		//C
		if(acumuladorMenorHabitantes> cantidadDeHabitantes ||banderaHabitantes==0)
		{
			acumuladorMenorHabitantes=cantidadDeHabitantes;
			paisMenosHabitantes=pais
			banderaHabitantes=1;
		}
		//D
		if(temperaturaTerritorio>=40)
		{
			cantidadDePaisesMax40grados++;//uso para F tambien
		}
		//E
		else if(temperaturaTerritorio<0 && continente=="america")
		{
			cantidadDePaisesAmericaMenos0++;
		}
		
		{
			cantidadDePaisIngresado++;
			acumuladorHabitantes=acumuladorHabitantes+cantidadDeHabitantes;
			alert(acumuladorHabitantes);

		}

		
    }
    alert(acumuladorMenorHabitantes + paisMenosHabitantes);
	alert(cantidadTemperaturaImparesEuropa);
	alert(cantidadDePaisIngresado);
	alert(acumuladorHabitantes);*/



	/*//variables princilpales
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	//Temperatura y acumulador de edad
	let temperaturaAlta=0;
	let banderaTemperatura=0;
	let acumuladorEdad=0;
	//Contadores
	let contadorViudos=0;
	let contadorMasculinos=0;
	let contadorMasculinosSoltero=0;
	let contadorTemperaturaYTerceraedad=0;
	//promedio de edad y respuesta de while
	let promedioDeEdad;
	let respuesta="si";
	//mesanjes
	let mensajeA;
	let mensajeB;
	let mensajeC;
	let mensajeD;
	let mensajeE;
	
	while (respuesta=="si")
	{
		//Nombre-----------------------------------------------------------------
		nombre=prompt("Ingrese su nombre");
		while (isNaN(nombre)==false)
		{
			nombre=prompt("Error, Ingrese su nombre");
		}
		//Edad-----------------------------------------------------------------
		edad=parseInt(prompt("Ingrese su edad: "));
		while (edad <0 || edad >110 || isNaN(edad)==true)
		{
			edad=parseInt(prompt("Error, Ingrese su edad: "));	
		}
		//Sexo-----------------------------------------------------------------
		sexo=prompt('Ingrese su sexo "f" o "m"');
		while (sexo !="f" && sexo !="m")
		{
			sexo=prompt('Erorr,Ingrese su sexo "f" o "m"');
		}
		//Estadocivil-----------------------------------------------------------------
		estadoCivil=prompt('Ingrese estado civil ("soltero", "casado" o "viudo")')
		while (estadoCivil != "soltero"&& estadoCivil!= "casado"&& estadoCivil!= "viudo") 
		{
			estadoCivil=prompt('Error, Ingrese estado civil ("soltero", "casado" o "viudo")');
		}
		//Temperatura-----------------------------------------------------------------
		temperatura=parseFloat(prompt("Ingrese su temperatura corporal (34°C hasta 42°C"));
		while (temperatura<34 || temperatura>42 || isNaN(temperatura)==true) 
		{
			temperatura=parseFloat(prompt("Error,Ingrese su temperatura corporal (34°C hasta 42°C"));
		}

		//A
		if(temperaturaAlta<temperatura || banderaTemperatura==0)
		{
			temperaturaAlta=temperatura;
			nombreTemperaturaAlta=nombre;
			banderaTemperatura=1;
		}
		//B
		if(estadoCivil=="viudo" && edad>=60)
		{
			contadorViudos++;
		}
		//C
		if(sexo=="m" && estadoCivil=="soltero"|| estadoCivil=="viudo" )
		{
			contadorMasculinos++;
		}
		//D
		if(edad>=60 && temperatura>=38)
		{
			contadorTemperaturaYTerceraedad++;
		}
		//E
		if(estadoCivil=="soltero" && sexo=="m")
		{
			contadorMasculinosSoltero++;
			acumuladorEdad=edad+acumuladorEdad;
		}
	
		respuesta=prompt("Queres ingresar otro dato familiar? si /no");
		
	}
	//Promedio de edad de Hombres
	promedioDeEdad=acumuladorEdad/contadorMasculinosSoltero;

	mensajeA="A.La persona: "+nombreTemperaturaAlta+" y con la temperatura mas alta : "+temperaturaAlta+"°C";
	mensajeB="B.Las personas, mayores de edad y viudos son: "+contadorViudos;
	mensajeC="C.La cantaidad de hombre o viduos son : "+contadorMasculinos;
	mensajeD="D.La cantaidad personas de la tercera edad(mas de 60 años) y con 38 de temperatura son: "+contadorTemperaturaYTerceraedad;
	mensajeE="E.El promedio de edad entre los hombres soltero son: "+promedioDeEdad;

	alert(mensajeA+"\n"+mensajeB+"\n"+mensajeC+"\n"+mensajeD+"\n"+mensajeE);*/
}