/* 
Paul Ramirez Benites
*/
function mostrar()
{
    let Nombre;
    let Localidad;
    let Mensaje;

    Nombre=document.getElementById("elNombre").value;
    Localidad=document.getElementById("laLocalidad").value;

    Mensaje="Usted es "+ Nombre +" y vive en la localidad "+ Localidad;

    alert(Mensaje);

}
