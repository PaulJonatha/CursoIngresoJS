function mostrar()
{
  let producto;
  let cantidadBolsas;
  let precioBolsas;
  let descuento;
  let ToltalPagarDescuento;
  let importeSinDescuento=0;
  let respuesta="si";
  let acomuladorBolsasArena=0;
  let acomuladorBolsasCal=0;
  let acomuladorCemento=0;
  let tipoMasCaro;
  let nombreTipoCaro;
  let AcumuladorDescuentoTotal=0;
  let AcumuladorPrecio=0;
  let precioTotal;
  let bandera=0;
  let mensajeA;
  let mensajeB;
  let mensajeD;
  let mensajeF;

  while (respuesta=="si")
  { 
    producto=prompt("Ingrese unos de estos tres prodcutos(arena,cal o cemento)");
    while (producto!="arena"&&producto!="cal"&&producto!="cemento") 
    {
      producto=prompt("Error, Reingrese unos de estos tres prodcutos(arena,cal o cemento)");
    }
    cantidadBolsas=parseInt(prompt("Ingrese la cantidad de bolsas que va llevar: "));
    while (cantidadBolsas<0 || isNaN(cantidadBolsas)==true) 
    {
      cantidadBolsas=parseInt(prompt("Error, Reingrese la cantidad de bolsas que va llevar: "));
    }
    precioBolsas=parseInt(prompt("Ingrese el precio del producto va llevar: "));
    while (precioBolsas<0 || isNaN(precioBolsas)==true) 
    {
      precioBolsas=parseInt(prompt("Error, Reingrese el precio del producto que va llevar: "));
    }

    precioTotal=cantidadBolsas*precioBolsas;
    AcumuladorPrecio=AcumuladorPrecio+precioTotal;
    console.log(AcumuladorPrecio);


    if (cantidadBolsas>10 && cantidadBolsas<30) 
    {
      descuento=15;
      ToltalPagarDescuento= precioTotal-(precioTotal*descuento)/100;
      //console.log(ToltalPagarDescuento);
    }
    else if (cantidadBolsas>=30) 
    {
      descuento=25;
      ToltalPagarDescuento= precioTotal-(precioTotal*descuento)/100;
      console.log(ToltalPagarDescuento);
    }
    else
    {
      importeSinDescuento=AcumuladorPrecio;
    }

    AcumuladorDescuentoTotal=AcumuladorDescuentoTotal+ToltalPagarDescuento;
    switch (producto) 
    {
      case "arena":
        acomuladorBolsasArena+=cantidadBolsas;

        break;
      case "cal":
        acomuladorBolsasCal+=cantidadBolsas;
        break;
      case "cemento":
        acomuladorCemento+=cantidadBolsas;
        break;
    }
    
    if(tipoMasCaro<precioBolsas|| bandera==0)
    {
      tipoMasCaro=precioBolsas;
      nombreTipoCaro=producto;
      bandera=1;
    }

    
    respuesta=prompt("Desea ingresar otro producto? si/no");
  }

  if (acomuladorBolsasArena>acomuladorBolsasCal && acomuladorBolsasArena>acomuladorCemento) 
  {
    mayorCantidadDeBolsas=acomuladorBolsasArena;
    mensajeD="Hay mas bolsas de arena"
  }
  else if (acomuladorCemento>acomuladorBolsasArena&& acomuladorCemento>acomuladorBolsasCal) 
  {
    mayorCantidadDeBolsas=acomuladorBolsasCal
    mensajeD="Hay mas bolsas de cemento"

  }
  else
  {
    mayorCantidadDeBolsas=acomuladorCemento;
    mensajeD="Hay mas bolsas de cal"
  }

  mensajeA="El total importe a pagar sin descuento: "+importeSinDescuento;
  mensajeB="El total importe con descuento: "+AcumuladorDescuentoTotal;
  mensajeD="Con mas cantidad de bolsas es: "+mayorCantidadDeBolsas;
  mensajeF="El tipo de prodcuto mas caro es: "+nombreTipoCaro;


  alert(mensajeA+"\n"+mensajeB+"\n"+mensajeD+"\n"+mensajeF);
}