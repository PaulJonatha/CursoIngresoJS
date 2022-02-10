/*1.
Paul Ramirez
Tp.1
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   
    let producto1;
    let producto2;
    let producto3;
    let Resultadodelosproductos;

       producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
       producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
       producto3=parseInt(document.getElementById("txtIdPrecioTres").value);

      Resultadodelosproductos="Las suma de ambos productos es: " + (producto1+producto2+producto3)+"$";
      alert(Resultadodelosproductos);
      
}
function Promedio () 
{
    let producto1;
    let producto2;
    let producto3;
    let Resultadodelosproductos;
    let costopromedio;

       producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
       producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
       producto3=parseInt(document.getElementById("txtIdPrecioTres").value);

      Resultadodelosproductos=(producto1+producto2+producto3);
      costopromedio="El costo promedio de los tres producto es : " + (Resultadodelosproductos/3)+"$";

      alert(costopromedio);

}
function PrecioFinal () 
{
    let producto1;
    let producto2;
    let producto3;
    let Resultadodelosproductos;
    let costomasIVA=0.21;

       producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
       producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
       producto3=parseInt(document.getElementById("txtIdPrecioTres").value);

       Resultadodelosproductos=(producto1+producto2+producto3);
       costomasIVA="El precio final mas 21% de IVA es : "+((Resultadodelosproductos*costomasIVA)+Resultadodelosproductos)+"$";
       alert(costomasIVA);

}