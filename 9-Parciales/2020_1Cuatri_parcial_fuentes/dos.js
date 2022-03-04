/*
Paul Ramirez Benites
El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?
*/

function mostrar()
{/*
  let nombre;
  let carrera;
  let estadoDeCarrera;
  let sexo;
  let nota;
  let contadorCarreraProg=0;
  let contadorCarreraPsicologia=0;
  let contadorCarreraDiseño=0;
  let contadorMujeresProgramacion=0;
  let contadorNoBinario=0;
  let contadorAlumnosFinalizado=0;
  let acumuladorDeNotaFinalizado=0;
  let promedioAlumnosFinalizado;
  let edadMasVieja;
  let nombreMasVieja;
  let notaNoBinario;
  let banderaMasVieja=0;
  let banderaNoBinario=0;
  let estadoDeCarreraNoBinario;
  let nombreNoBinario;
  let sexoMasVieja;
  let respuesta="si";
  let mensaje;

  while (respuesta=="si")
  {
  	//Nombre-----------------------------------------------------------------
		nombre=prompt("Ingrese su nombre");
		while (isNaN(nombre)==false)
		{
			nombre=prompt("Error. Ingrese su nombre");
		}
    carrera=prompt("Ingrese su carerra entre (Programación, Psicología, Diseño gráfico)");
    //carrera
		while (carrera!= "programacion" && carrera!="psicologia"&& carrera!="diseño grafico")
		{
			carrera=prompt("Error. Ingrese su carerra entre (Programación, Psicologia, Diseño grafico)");
		}
    //estado de carrera
    estadoDeCarrera=prompt("Ingrese si estas en (curso-abandono-finalizado)");
		while (estadoDeCarrera!="curso" && estadoDeCarrera!="abondono"&& estadoDeCarrera!="finalizado")
		{
			estadoDeCarrera=prompt("Error. Ingrese si estas en (curso-abandono-finalizado)");
		}
		//Edad-----------------------------------------------------------------
		edad=parseInt(prompt("Ingrese su edad: "));
		while (edad <18 || edad >100 || isNaN(edad)==true)
		{
			edad=parseInt(prompt("Error, Ingrese su edad: "));	
		}
		//Sexo-----------------------------------------------------------------
		sexo=prompt('Ingrese su sexo "f" , "m" o "nobinario"');
		while (sexo !="f" && sexo !="m" && sexo!="nobinario")
		{
			sexo=prompt('Erorr,Ingrese su sexo "f" ,"no" o "nobinario"');
		}
    nota=parseInt(prompt("Ingrese la nota: "));
		while (nota <0 || nota >10 || isNaN(nota)==true)
		{
			nota=parseInt(prompt("Error, Ingrese la nota: "));	
		}

    switch (carrera) 
    {
      //A
      case "programacion":
        contadorCarreraProg++;


        if(sexo=="f")
        {
          contadorMujeresProgramacion++;//B
        }
        
        break;
    
      case "psicologia":
        contadorCarreraPsicologia++;
        if (edadMasVieja<edad  || banderaMasVieja==0) 
        {
          edadMasVieja=edad;
          nombreMasVieja=nombre;
          sexoMasVieja=sexo;
          banderaMasVieja=1;  
        }
        if(sexo=="nobinario")
        { if(notaNoBinario<nota|| banderaNoBinario==0)
          {
            notaNoBinario=nota;
            nombreNoBinario =nombre;
            estadoDeCarreraNoBinario =estadoDeCarrera;
            banderaNoBinario=1;
          }
        }
        break;

      case"diseño grafico":
        contadorCarreraDiseño++;
 
       break;
    }//switch
    //C
    if(sexo=="nobinario")
    {
      contadorNoBinario++;
    }
    if(estadoDeCarrera=="finalizado")//D
    {
      acumuladorDeNotaFinalizado=nota+acumuladorDeNotaFinalizado;
      contadorAlumnosFinalizado++;
    }

    respuesta=prompt("Queres ingresar otro dato? si/no");

  } //while 
  if (contadorCarreraProg>contadorCarreraDiseño && contadorCarreraProg >contadorCarreraDiseño)
  {
   mensaje="La carrera de programacion hay mas alumnos";
  } 
  else if (contadorCarreraDiseño>contadorCarreraProg && contadorCarreraDiseño>contadorCarreraPsicologia) {
    mensaje="La carrera de diseño hay mas alumnos";
  }
  else
  {
    mensaje="La carrera de psicologia hay mas alumnos";
  }


  promedioAlumnosFinalizado=acumuladorDeNotaFinalizado/contadorAlumnosFinalizado;
  alert(acumuladorDeNotaFinalizado);
  alert(promedioAlumnosFinalizado);
  alert(edadMasVieja+ nombreMasVieja +sexoMasVieja );
  alert(notaNoBinario+nombreNoBinario+estadoDeCarreraNoBinario);
  alert(mensaje);*/

  let tipo;
  let precio;
  let precioBolsa;
  let cantidadBolsas;
  let AcumuladorCemento=0;
  let AcumuladorCal=0;
  let AcumuladorArena=0;
  let AcumuladorDescuentoTotal=0
  let MayorCantidadDeBolsas;
  
  let descuento;
  let descuentoPrecio;
  let AcumuladorPrecio=0;
  let bandera=0;
  let brutoSinDescuento=0;
  let TipoCaro;
  let respuesta="si";
  
  let mensajeA;
  let mensajeB;
  let mensajeD;
  let mensajeF;


  while (respuesta=="si") 
  {
    //tipo-------------------------------------------------------------------------
    tipo=prompt('"Ingresa los tipos de valides: "arena" "cal" "cemento"');
    while (tipo!="arena"&& tipo!="cal"&& tipo!="cemento") 
    {
      tipo=prompt('Error,Ingresa los tipos de valides: "arena" "cal" "cemento"');
    }
    //Cantidad-------------------------------------------------------------------------
    cantidadBolsas=parseInt(prompt("Ingrese la cantidad de bolsa: "));

    while (isNaN(cantidadBolsas)==true) 
    {
      cantidadBolsas=parseInt(prompt("Error,Ingrese la cantidad de bolsa: "));
    }
    //Precio-------------------------------------------------------------------------
    precio=parseInt(prompt("ingrese el precio de las bolsas:"));
    while(precio<0 || isNaN(precio))
    {
      precio=parseInt(prompt("Erorr,ingrese el precio de las bolsas:"));
    }
    //Acumulador de precio y de precio bolsa-------------------------------------------------------------------------
    precioBolsa=precio*cantidadBolsas;
    AcumuladorPrecio=AcumuladorPrecio+precioBolsa;
    
    // alert(precioBolsa);
    //Descuento de 15%  30% y sin descuento-------------------------------------------------------------------------
    if(cantidadBolsas>=10 && cantidadBolsas<30)
    {
      descuento=15;
      descuentoPrecio=precioBolsa-(precioBolsa*descuento)/100;

    }
    else if (cantidadBolsas>=30)
    {
      descuento=25;
      descuentoPrecio=precioBolsa-(precioBolsa*descuento)/100;
    }
    else
    {
      brutoSinDescuento=AcumuladorPrecio;
    }
    //acumuludorDescuento-------------------------------------------------------------------------
    AcumuladorDescuentoTotal=AcumuladorDescuentoTotal+descuentoPrecio;


    //alert(descuentoPrecio);
    //Acumulador de cantidad de bolsas-------------------------------------------------------------------------
      switch (tipo)
      {
        case "arena":
          AcumuladorArena=cantidadBolsas+AcumuladorArena;
          break;
      
        case"cal":
          AcumuladorCal=cantidadBolsas+AcumuladorCal;
          break;
        case"cemento":
          AcumuladorCemento=cantidadBolsas+AcumuladorCemento;
          break;				
      }
      //El tipo mas caro-------------------------------------------------------------------------
    if(TipoCaro<precioBolsa || bandera==0)
		{
			TipoCaro=precioBolsa;		
			bandera=1;
		}
    
    respuesta=prompt("Queres ingrese otro dato, ingrese: si/no");
  }//for-------------------------------------------------------------------------

   //Mayor cantidad de bolsas-------------------------------------------------------------------------
  if(AcumuladorArena>AcumuladorCal && AcumuladorArena>AcumuladorCemento)
	{
    MayorCantidadDeBolsas=AcumuladorArena;
		mensajeD=mensajeB;//"El tipo con mas unidades es : "+ Precio+"$";
	}
	else if (AcumuladorCal>AcumuladorCemento && AcumuladorCal>AcumuladorArena)
	{
    MayorCantidadDeBolsas=AcumuladorCal;
		mensajeD=mensajeB;//"El tipo con mas unidades es : "+Precio+"$";
	}
	else
	{
    MayorCantidadDeBolsas=AcumuladorCemento;
		mensajeD=mensajeB//"El tipo con mas unidades es : "+Precio+"$";
	}


    //Mensaje-------------------------------------------------------------------------
    mensajeA="Importe total bruto sin descuento: "+brutoSinDescuento+"$";
    mensajeB="Importe total de pagar con descuento "+AcumuladorDescuentoTotal+"$";
    mensajeD="El tipo con mas cantidad de bolsas es: "+MayorCantidadDeBolsas +" Tipo: "+tipo;
    mensajeF="El tipo mas caro: "+tipo+" ,con el precio: "+TipoCaro;

    alert(mensajeA+"\n"+mensajeB+"\n"+mensajeD+"\n"+mensajeF);


}
