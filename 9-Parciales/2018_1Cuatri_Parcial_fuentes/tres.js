/* 
Paul Ramirez Benites
*/
function mostrar()
{
    let Precio;
    let Descuento;
    let PrecioFinal;

    Precio=parseFloat(prompt("Ingrese un precio del producto"));
    Descuento=parseFloat(prompt("Ingrese el descuento del producto"));
    
    PrecioFinal=Precio-(Precio*Descuento)/100;

    document.getElementById("elPrecioFinal").value=PrecioFinal;
}
