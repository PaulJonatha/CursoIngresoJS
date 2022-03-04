/*4.
Alumno :Paul Ramirez Benites
tp 4
	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    
 	 let CantidadLamp;
     const PRECIO=35;
     let Descuento;
     let PrecioconDescuento;
     let CantiTotal;
     let marca;
     let IIBB=10;
     let IngresoBrutos;
    
     CantidadLamp=parseInt(document.getElementById("txtIdCantidad").value);
     marca=document.getElementById("Marca").value;
     
   
    switch (CantidadLamp) 
    {
        case 1:
            break;
        case 2:
            break;
        case 3:
            if(marca=="ArgentinaLuz")
            {
                Descuento=15;
            }
            else if("FelipeLamparas"){
                Descuento=10;
            }
            else{
                Descuento=5;
            }
            break;
        case 4:
            if(marca=="ArgentinaLuz"|| marca=="FelipeLampara")
            {
                Descuento=25;
            } 
            else{
                Descuento=20;
            }
            break;
        case 5:
            if (marca=="ArgentinaLuz") 
            {
                Descuento=40;
            }
            else{
                Descuento=30;
            }
            break;
        default:
                Descuento=50;
            break;
        
    }
    
    CantiTotal=CantidadLamp*PRECIO;
    PrecioconDescuento=CantiTotal-((Descuento*CantiTotal)/100);
    document.getElementById("txtIdprecioDescuento").value = PrecioconDescuento;

    if(PrecioconDescuento>120)
    { 
        IngresoBrutos=PrecioconDescuento+((PrecioconDescuento*IIBB)/100);
                //  120    +  12 =132
   
        alert("IIBB usted pago "+ IngresoBrutos +", siendo "+ IIBB +"% el impuesto que se pagó.");
        document.getElementById("txtIdprecioDescuento").value =  IngresoBrutos;
    }
        




     //A
    /*if(CantidadLamp>=6)
    {
        Descuento=0.5;
        CantiTotal=(CantidadLamp*PRECIO);
       PrecioconDescuento=(CantiTotal-(CantiTotal*Descuento));
        document.getElementById("txtIdprecioDescuento").value = parseFloat(PrecioconDescuento);

    }
      //B
    else if(CantidadLamp==5 && marca=="ArgentinaLuz"  )
    {
        Descuento=0.4;
        CantiTotal=(CantidadLamp*PRECIO);
       PrecioconDescuento=(CantiTotal-(CantiTotal*Descuento));
        document.getElementById("txtIdprecioDescuento").value = parseFloat (PrecioconDescuento);
    }
    else if(CantidadLamp==5 && marca!="ArgentinaLuz")
    {
        Descuento=0.3;
        CantiTotal=(CantidadLamp*PRECIO);
       PrecioconDescuento=(CantiTotal-(CantiTotal*Descuento));
        document.getElementById("txtIdprecioDescuento").value = parseFloat (PrecioconDescuento);
    }
    //C
    else if(CantidadLamp==4 || marca =="ArgentinaLuz" || marca=="FelipeLamparas")
    {
        Descuento=0.25;
        CantiTotal=(CantidadLamp*PRECIO);
        PrecioconDescuento=(CantiTotal-(CantiTotal*Descuento));
        document.getElementById("txtIdprecioDescuento").value = parseFloat (PrecioconDescuento);
    }
    if(CantidadLamp==4 && marca!="ArgentinaLuz" && marca!="FelipeLamparas")
    {
        Descuento=0.2;
        CantiTotal=(CantidadLamp*PRECIO);
        PrecioconDescuento=(CantiTotal-(CantiTotal*Descuento));
        document.getElementById("txtIdprecioDescuento").value = parseFloat (PrecioconDescuento);
    }
    //D
    else if(CantidadLamp==3 && marca=="ArgentinaLuz" )
    {
        Descuento=0.15;
        CantiTotal=(CantidadLamp*PRECIO);
        PrecioconDescuento=(CantiTotal-(CantiTotal*Descuento));
        document.getElementById("txtIdprecioDescuento").value = parseFloat (PrecioconDescuento);
    }
    else if(CantidadLamp==3 && marca=="FelipeLamparas" )
    {
        Descuento=0.10;
        CantiTotal=(CantidadLamp*PRECIO);
        PrecioconDescuento=(CantiTotal-(CantiTotal*Descuento));
        document.getElementById("txtIdprecioDescuento").value = parseFloat (PrecioconDescuento);
    }
    else if(CantidadLamp==3 && marca!="ArgentinaLuz" && marca!="FelipeLamparas")
    {
        Descuento=0.05;
        CantiTotal=(CantidadLamp*PRECIO);
        PrecioconDescuento=(CantiTotal-(CantiTotal*Descuento));
        document.getElementById("txtIdprecioDescuento").value = parseFloat (PrecioconDescuento);
    }
    //E
     if (PrecioconDescuento>=120)
     {
         IngresoBrutos=(PrecioconDescuento+(PrecioconDescuento*IIBB)/100);
         IIBB=((PrecioconDescuento*IIBB)/100);

         alert("IIBB usted pago "+ IngresoBrutos +", siendo "+ IIBB +" el impuesto que se pagó.");
         document.getElementById("txtIdprecioDescuento").value = parseFloat (IngresoBrutos);
     }
     else 
     {
        document.getElementById("txtIdprecioDescuento").value = parseFloat(PRECIO);

     }
    if(CantidadLamp==2)
    {
        PrecioconDescuento=PRECIO*2;
        document.getElementById("txtIdprecioDescuento").value = parseFloat(PrecioconDescuento);
    }*/
}
