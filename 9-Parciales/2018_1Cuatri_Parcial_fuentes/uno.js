/* 
Paul Ramirez Benites
*/
function mostrar()
{   
    let Ancho;
    let Largo;
    let Perimetro;
    let Mensaje;
    
    Ancho=parseFloat(prompt("Ingrese el ancho de un rectangulo: "));  
    Largo=parseFloat(prompt("Ingrese el largo de un rectangulo: "));  

    Perimetro=2*(Ancho+Largo);
    Mensaje="El perimetro de un rectangulo es: " + Perimetro; 
    alert(Mensaje);
}
